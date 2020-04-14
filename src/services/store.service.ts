import { Observable, ReplaySubject, Subject } from 'rxjs';
import {AnyAction, Store} from 'redux';

import { store } from '../config/store.config';
import { AppState, IDiceSetForm } from '../store/main';
import { IProfile, IRoom, IRoomLog } from '../models/rooms.model';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

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
    return this.store$.pipe(map(state => state.form.diceSetForm));
  }

  public getSelectedRoomData$(): Observable<IRoom> {
    return this.store$.pipe(
      map(state => state.firestore.data.selectedRoom),
      filter(room => !!room)
    ) as Observable<IRoom>;
  }

  public getSelectedRoomDataLogs$(): Observable<Array<IRoomLog>> {
    return this.getSelectedRoomData$().pipe(map(room => room.logs));
  }

  public getLastRoomLogOnChange$(): Observable<IRoomLog> {
    return this.getSelectedRoomDataLogs$().pipe(
      map(logs => [...logs].pop()),
      // @ts-ignore
      filter(log => !!log),
      distinctUntilChanged((a, b) => a.timestamp === b.timestamp)
    ) as Observable<IRoomLog>;
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
