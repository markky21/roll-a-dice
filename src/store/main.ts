import { Action, combineReducers, Reducer } from 'redux';
import { firebaseReducer, FirebaseReducer, FirestoreReducer } from 'react-redux-firebase';
import { reducer as formReducer } from 'redux-form';
// @ts-ignore
import firestore from 'redux-firestore/lib/reducer';

import { FirebaseUserProfile, FirestoreQuerySchema, FirestoreSchema } from './firebase/firebase.types';
import { IProfile } from '../models/rooms.model';
import { chatsReducer } from './chats/chats.reducer';
import { ChatsState } from './chats/chats.model';
import { locationReducer } from './location/location.reducer';
import { LocationState } from './location/location.model';

/**********************************************************
 * Interfaces
 **********************************************************/

interface RootState {
  firestore: FirestoreReducer.Reducer & {
    data: FirestoreSchema & FirestoreQuerySchema;
  };
  firebase: FirebaseReducer.Reducer<FirebaseUserProfile> & {
    profile: IProfile;
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
    location: locationReducer,
    form: formReducer,
    ...asyncReducers,
  });
}

const rootReducer = combineReducers<RootState>({
  firebase: firebaseReducer,
  firestore,
});

export interface AppState extends ReturnType<typeof rootReducer> {
  chats: ChatsState;
  location: LocationState;
}
