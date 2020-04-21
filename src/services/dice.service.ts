import { from, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { firestore } from 'firebase/app';
import { concatMap, delayWhen, map, takeUntil, tap, withLatestFrom } from 'rxjs/operators';

import { IDiceAfterThrow, IDiceBeforeThrow, IDiceSet, IDiceThrow, IDiceThrowConfig } from '../models/dice.model';
import { roomsActions } from '../store/rooms/rooms.actions';
import { uiActions } from '../store/ui/ui.actions';
import { FirestoreCollection } from '../models/firebase.model';
import { IProfile, IRoomLog, Log } from '../models/rooms.model';
import { StoreService } from './store.service';
import { diceUtils } from '../utils/dice.utils';

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

  private constructor(private firestore: firestore.Firestore) {
    this.createSubscriptions();
    this.diceThrowDelayedWhen$.subscribe(e => console.log({ e }));
  }

  public hostDestroyed(): void {
    this.takeUntil$.next();
    DiceService.instance = null;
    this.setDiceRolling(false);
  }

  static getInstance(firestore: firestore.Firestore): DiceService {
    if (!DiceService.instance) {
      DiceService.instance = new DiceService(firestore);
    }

    return DiceService.instance;
  }

  private createSubscriptions(): void {
    this.diceThrow$.pipe(takeUntil(this.takeUntil$)).subscribe(diceThrow => {
      console.log('diceThrow$: ', diceThrow);
    });

    this.diceBeforeThrow$.pipe(takeUntil(this.takeUntil$)).subscribe(diceThrow => {
      this.setDiceRolling(true);
      this.setIsPending(false);
    });

    this.diceAfterThrow$.pipe(takeUntil(this.takeUntil$)).subscribe(diceThrow => {
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
    if (!this.roomUid) return of(null);

    // TODO: catch error and show toastBar
    const documentRef = this.firestore.doc(`${FirestoreCollection.ROOMS}/${this.roomUid}`);
    return from(
      this.firestore.runTransaction((t: firestore.Transaction) => {
        return t.get(documentRef).then(doc => {
          const newLog: IRoomLog = {
            authorUid: this.profile?.uid,
            payload: diceThrow,
            timestamp: Date.now().toString(),
            type: Log.DICE_ROLL,
          };

          const logs: IRoomLog[] = [...doc.data().logs, newLog];
          return t.update(documentRef, { logs });
        });
      })
    ).pipe(map(() => diceThrow));
  }
}
