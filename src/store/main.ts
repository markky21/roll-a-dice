import { Action, combineReducers, Reducer } from 'redux';
import { firebaseReducer, FirebaseReducer, FirestoreReducer } from 'react-redux-firebase';
import { FormReducer, reducer as formReducer } from 'redux-form';
// @ts-ignore
import firestore from 'redux-firestore/lib/reducer';

import {
  FirebaseQuerySchema,
  FirebaseUserProfile,
  FirestoreQuerySchema,
  FirestoreSchema,
} from './firebase/firebase.types';
import { IProfile, IRoomCreateForm } from '../models/rooms.model';
import { chatsReducer } from './chats/chats.reducer';
import { ChatsState } from './chats/chats.model';
import { locationReducer } from './location/location.reducer';
import { LocationState } from './location/location.model';
import { RoomsState } from './rooms/rooms.model';
import { roomsReducer } from './rooms/rooms.reducer';

/**********************************************************
 * Interfaces
 **********************************************************/

interface RootState {
  firestore: FirestoreReducer.Reducer & {
    data: FirestoreSchema & FirestoreQuerySchema;
  };
  firebase: FirebaseReducer.Reducer<FirebaseUserProfile> & {
    auth: IProfile;
    profile: IProfile;
    data: FirebaseQuerySchema | any;
  };
}

/**********************************************************
 * functions
 **********************************************************/
export function makeRootReducer<S = any, A extends Action = Action>(asyncReducers?: Reducer<S, A>) {
  return combineReducers({
    firebase: firebaseReducer,
    firestore,
    chats: chatsReducer,
    rooms: roomsReducer,
    location: locationReducer,
    form: formReducer,
    ...asyncReducers,
  });
}

const rootReducer = combineReducers<RootState>({
  firebase: firebaseReducer as any,
  firestore,
});

export interface IDiceSetForm {
  registeredFields: {
    [key: string]: Object;
  };
  values: {
    [key: string]: number;
  };
}

export interface AppState extends ReturnType<typeof rootReducer> {
  chats: ChatsState;
  rooms: RoomsState;
  location: LocationState;
  form: FormReducer & { diceSetForm: IDiceSetForm; createRoom: { values: IRoomCreateForm } };
}
