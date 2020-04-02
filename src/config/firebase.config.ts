import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import firebaseApp from 'firebase/app';
import { createFirestoreInstance } from 'redux-firestore';
import { store } from './store.config';

export const firebaseConfig = {
  apiKey: 'AIzaSyA0bXhCXcLJC9FGk3ynZoJP5KJ6CY3sqYY',
  authDomain: 'roll-a-dice-4cba1.firebaseapp.com',
  databaseURL: 'https://roll-a-dice-4cba1.firebaseio.com',
  projectId: 'roll-a-dice-4cba1',
  storageBucket: 'roll-a-dice-4cba1.appspot.com',
  messagingSenderId: '768622256477',
  appId: '1:768622256477:web:51a5c9f0ef4030d366c8b4',
  measurementId: 'G-J2M3QQ0M89',
};

export const reactReduxFirebaseConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

export const reactReduxFirebaseProps = {
  firebase: firebaseApp,
  config: reactReduxFirebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
