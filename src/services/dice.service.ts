import { Observable, ReplaySubject, Subject } from 'rxjs';
import { firestore } from 'firebase/app';
import { distinctUntilChanged, filter, map, takeUntil, withLatestFrom } from 'rxjs/operators';

import { IDiceBeforeThrow, IDiceThrow, IDiceThrowResult } from '../models/dice.model';
import { roomsActions } from '../store/rooms/rooms.actions';
import { FirestoreCollection } from '../models/firebase.model';
import { IProfile, IRoom, IRoomLog, Log } from '../models/rooms.model';
import { StoreService } from './store.service';
import { diceSetToString } from '../utils/dice.utils';

export class DiceService {
  private static instance: DiceService | null;

  public readonly diceThrow$ = new Subject<IDiceThrow>();
  public readonly diceBeforeThrow$ = new Subject<IDiceBeforeThrow>();
  public readonly diceThrowResult$ = new ReplaySubject<IDiceThrowResult>(1);
  public profile: IProfile | null = null;
  public roomUid: string | null = null;

  private readonly takeUntil$ = new Subject();
  private readonly storeService: StoreService = StoreService.getInstance();

  private constructor(private firestore: firestore.Firestore) {
    this.createSubscriptions();
  }

  public hostDestroyed(): void {
    this.takeUntil$.next();
    DiceService.instance = null;
    this.setDiceRolling(false);
  }

  public get handleDiceSetFormChanges$(): Observable<string> {
    return this.storeService.getDiceSetForm().pipe(
      map(form => form?.values),
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
      filter(dices => !!dices),
      map(dices => diceSetToString(dices)),
      takeUntil(this.takeUntil$)
    );
  }

  static getInstance(firestore: firestore.Firestore): DiceService {
    if (!DiceService.instance) {
      DiceService.instance = new DiceService(firestore);
    }

    return DiceService.instance;
  }

  private createSubscriptions(): void {
    // this.diceThrow$.pipe(takeUntil(this.takeUntil$)).subscribe(diceThrow => {
    //   console.log('diceThrow$: ', diceThrow);
    // });

    this.diceBeforeThrow$.pipe(takeUntil(this.takeUntil$)).subscribe(diceThrow => {
      this.setDiceRolling(true);
      // console.log('diceBeforeThrow$: ', diceThrow);
    });

    this.diceThrowResult$.pipe(takeUntil(this.takeUntil$)).subscribe(diceThrow => {
      this.setDiceRolling(false);
      diceThrow.emit && this.firestoreAddNewThrow(diceThrow);
      // console.log('diceThrowResult$: ', diceThrow);
    });

    this.performDiceThrowWhenNewDiceThrowLogAppears();
  }

  /**
   * Set UI flag to tell if dice are rolling
   */
  private setDiceRolling(diceRolling: boolean): void {
    this.storeService.dispatch(roomsActions.diceRolling(diceRolling));
  }

  private firestoreAddNewThrow(diceThrowResult: IDiceThrowResult): void {
    if (!this.roomUid) {
      return;
    }

    const { emit, ...payload } = diceThrowResult;
    const documentRef = this.firestore.doc(`${FirestoreCollection.ROOMS}/${this.roomUid}`);

    this.firestore.runTransaction((t: firestore.Transaction) => {
      return t
        .get(documentRef)
        .then(doc => {
          const newLog: IRoomLog = {
            authorUid: this.profile?.uid as string,
            payload,
            timestamp: Date.now().toString(),
            type: Log.DICE_ROLL,
          };
          const logs: IRoomLog[] = [...(doc.data() as IRoom).logs, newLog];
          return t.update(documentRef, { logs });
        })
        .catch((err: any) => {
          // TODO: add toast message
          // TRANSACTION_FAILURE action dispatched
          console.log('Transaction failure:', err);
        });
    });
  }

  private performDiceThrowWhenNewDiceThrowLogAppears() {
    this.storeService
      .getLastRoomLogOnChange$()
      .pipe(
        filter((log: IRoomLog) => log.type === Log.DICE_ROLL),
        withLatestFrom(this.storeService.getUserProfile$()),
        filter(([log, profile]) => !!profile.uid && log.authorUid !== profile.uid),
        takeUntil(this.takeUntil$)
      )
      .subscribe(([log]: [IRoomLog, IProfile]) => {
        this.diceThrow$.next({ ...log.payload });
      });
  }
}
