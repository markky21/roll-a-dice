import { Action, combineReducers, Reducer } from 'redux';
import { firebaseReducer, FirebaseReducer, FirestoreReducer } from 'react-redux-firebase';
// @ts-ignore
import firestore from 'redux-firestore/lib/reducer';

import { FirebaseUserProfile, FirestoreQuerySchema, FirestoreSchema } from './firebase/firebase.types';
import { Profile } from '../models/rooms.model';
import { chatsReducer } from './chats/chats.reducer';
import { ChatsState } from './chats/chats.types';

/**********************************************************
 * Interfaces
 **********************************************************/

interface RootState {
  firestore: FirestoreReducer.Reducer & {
    data: FirestoreSchema & FirestoreQuerySchema;
  };
  firebase: FirebaseReducer.Reducer<FirebaseUserProfile> & {
    profile: Profile;
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
    // form,
    ...asyncReducers,
  });
}

const rootReducer = combineReducers<RootState>({
  firebase: firebaseReducer,
  firestore,
});

export interface AppState extends ReturnType<typeof rootReducer> {
  chats: ChatsState;
}
