import { from, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { firestore } from 'firebase/app';
import { concatMap, delay, delayWhen, filter, map, takeUntil, tap, withLatestFrom } from 'rxjs/operators';

import { diceUtils } from '../utils/dice.utils';
import { FirestoreCollection } from '../models/firebase.model';
import { IDiceAfterThrow, IDiceBeforeThrow, IDiceSet, IDiceThrow, IDiceThrowConfig } from '../models/dice.model';
import { IProfile, IRoomLog, Log } from '../models/rooms.model';
import { roomsActions } from '../store/rooms/rooms.actions';
import { SnackbarType, ToastContextProviderValue } from '../contexts/Toast.context';
import { StoreService } from './store.service';
import { uiActions } from '../store/ui/ui.actions';

export class DiceService {
  private static instance: DiceService | null;

  public readonly diceThrow$ = new Subject<IDiceThrow>();
  public readonly diceBeforeThrow$ = new Subject<IDiceBeforeThrow>();
  public readonly diceAfterThrow$ = new ReplaySubject<IDiceAfterThrow>(1);
  public readonly requestNewThrow$ = new Subject<IDiceThrowConfig>();
  public readonly diceThrowDelayedWhen$ = this.diceThrow$.pipe(delayWhen(() => this.diceAfterThrow$));

  public profile: IProfile | null = null;
  public roomUid: string | null = null;

  private readonly takeUntil$ = new Subject();
  private readonly storeService: StoreService = StoreService.getInstance();

  private constructor(private firestore: firestore.Firestore, private toast: ToastContextProviderValue) {
    this.createSubscriptions();
  }

  public hostDestroyed(): void {
    this.takeUntil$.next();
    DiceService.instance = null;
    this.setDiceRolling(false);
  }

  static getInstance(firestore: firestore.Firestore, toast: ToastContextProviderValue): DiceService {
    if (!DiceService.instance) {
      DiceService.instance = new DiceService(firestore, toast);
    }

    return DiceService.instance;
  }

  private createSubscriptions(): void {
    this.diceBeforeThrow$.pipe(takeUntil(this.takeUntil$)).subscribe(() => {
      this.setDiceRolling(true);
      this.setIsPending(false);
    });

    this.diceAfterThrow$.pipe(takeUntil(this.takeUntil$)).subscribe(() => {
      this.setDiceRolling(false);
      this.setIsPending(false);
    });

    this.handleRequestNewThrow$().subscribe();
    this.performDiceThrowWhenNewDiceThrowLogAppears$().subscribe();
  }

  private setDiceRolling(diceRolling: boolean): void {
    this.storeService.dispatch(roomsActions.diceRolling(diceRolling));
  }

  private setIsPending(isPending: boolean): void {
    this.storeService.dispatch(uiActions.setIsPending(isPending));
  }

  private performDiceThrowWhenNewDiceThrowLogAppears$(): Observable<IRoomLog> {
    return this.storeService.getSelectedRoomLastDiceThrowLog$().pipe(
      tap(({ payload }: IRoomLog) => this.diceThrow$.next(payload as IDiceThrow)),
      takeUntil(this.takeUntil$)
    );
  }

  private handleRequestNewThrow$(): Observable<IDiceThrow> {
    return this.requestNewThrow$.pipe(
      tap(() => {
        this.setDiceRolling(true);
        this.setIsPending(true);
      }),
      withLatestFrom(this.storeService.getDiceSetFormValues()),
      filter(([, setDice]) => {
        const isEveryZero = Object.values(setDice).every(v => v === 0);
        if (isEveryZero) {
          this.setDiceRolling(false);
          this.setIsPending(false);

          this.toast.setSnackbarConfig({
            type: SnackbarType.WARNING,
            open: true,
            text: 'Set at least one dice',
          });
        }
        return !isEveryZero;
      }),
      map(([diceThrowConfig, diceSet]: [IDiceThrowConfig, IDiceSet]) => {
        const diceThrow: IDiceThrow = {
          diceThrowConfig,
          diceSet,
          result: diceUtils.generateThrowResultFromDiceSet(diceSet),
        };
        return diceThrow;
      }),
      concatMap(diceThrow => {
        if (!this.roomUid) {
          return of(null).pipe(
            tap(() => this.diceThrow$.next(diceThrow)),
            map(() => diceThrow)
          );
        }
        return this.createNewThrowLogInRoomLogs$(diceThrow);
      }),
      takeUntil(this.takeUntil$)
    );
  }

  private createNewThrowLogInRoomLogs$(diceThrow: IDiceThrow): Observable<IDiceThrow> {
    if (!this.roomUid)
      return of(null).pipe(
        tap(() =>
          this.toast.setSnackbarConfig({
            type: SnackbarType.ERROR,
            open: true,
            text: 'Upss.. there was an error set new throw',
          })
        ),
        delay(1000),
        tap(() => {
          this.setDiceRolling(false);
          this.setIsPending(false);
        })
      );

    const documentRef = this.firestore.doc(`${FirestoreCollection.ROOMS}/${this.roomUid}`);
    return from(
      this.firestore.runTransaction((t: firestore.Transaction) => {
        return t.get(documentRef).then(doc => {
          const newLog: IRoomLog = {
            authorUid: this.profile?.uid,
            payload: diceThrow,
            timestamp: Date.now(),
            type: Log.DICE_ROLL,
          };

          const logs: IRoomLog[] = [...doc.data().logs, newLog];
          return t.update(documentRef, { logs });
        });
      })
    ).pipe(map(() => diceThrow));
  }
}
