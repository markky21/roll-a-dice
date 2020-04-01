import { combineReducers } from 'redux';
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase';

interface UserProfile {
  email: string;
}

export interface TodoValue {
  text: string;
  done: boolean;
}

// create schema for the DB
interface DBSchema {
  todos: TodoValue;
  [name: string]: any;
}
interface RootState {
  firebase: FirebaseReducer.Reducer<UserProfile>;
  // firestore: FirestoreReducer.Reducer;
}

export const rootReducer = combineReducers<RootState>({
  firebase: firebaseReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

