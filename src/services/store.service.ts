import { AnyAction, Store } from 'redux';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Observable, ReplaySubject, Subject } from 'rxjs';

import { store } from '../config/store.config';
import { AppState, IDiceSetForm } from '../store/main';
import { IProfile, IRoom, IRoomLog, Log } from '../models/rooms.model';
import { distinctUntilObjectChanged } from '../utils/rxjs/distinctUntilObjectChanged.pipe';
import { IDiceSet } from '../models/dice.model';
import { diceUtils } from '../utils/dice.utils';

export class StoreService {
  private static instance: StoreService | null;

  public store: Store = store;

  private readonly takeUntil$ = new Subject();
  private readonly _store$ = new ReplaySubject<AppState>(1);
  private readonly _storeUnsubscribeFn: Function;

  private constructor() {
    this._storeUnsubscribeFn = this.store.subscribe(() => {
      this._store$.next(this.store.getState());
    });
  }

  public get store$(): Observable<AppState> {
    return this._store$.asObservable();
  }

  public getDiceSetForm(): Observable<IDiceSetForm> {
    return this.store$.pipe(
      map(state => state.form.diceSetForm),
      distinctUntilObjectChanged()
    );
  }

  public getDiceSetFormValues(): Observable<IDiceSet> {
    return this.store$.pipe(
      map(state => state.form.diceSetForm?.values),
      distinctUntilObjectChanged()
    );
  }

  public getSelectedRoomData$(): Observable<IRoom> {
    return this.store$.pipe(
      map(state => state.firestore.data.selectedRoom),
      filter(room => !!room)
    );
  }

  public getSelectedRoomDataLogs$(): Observable<Array<IRoomLog>> {
    return this.getSelectedRoomData$().pipe(
      map(room => room.logs),
      filter(logs => !!logs)
    );
  }

  public getSelectedRoomLastDiceThrowLog$(): Observable<IRoomLog> {
    return this.getSelectedRoomDataLogs$().pipe(
      map(logs => logs[logs.length ? logs.length - 1 : 0]),
      filter(log => !!log && log.type === Log.DICE_ROLL),
      distinctUntilChanged((logA, logB) => logA.timestamp === logB.timestamp),
      map((log: IRoomLog) => ({
        ...log,
        payload: {
          ...log.payload,
          diceSet: diceUtils.sortObjectWithDiceKey(log.payload.diceSet),
          result: diceUtils.sortObjectWithDiceKey(log.payload.result),
        },
      }))
    );
  }

  public getUserProfile$(): Observable<IProfile> {
    return this.store$.pipe(map(state => state.firebase.profile));
  }

  public dispatch(action: AnyAction): AnyAction {
    return this.store.dispatch(action);
  }

  public hostDestroyed(): void {
    this.takeUntil$.next();
    this._storeUnsubscribeFn();
    StoreService.instance = null;
  }

  static getInstance(): StoreService {
    if (!StoreService.instance) {
      StoreService.instance = new StoreService();
    }

    return StoreService.instance;
  }
}
