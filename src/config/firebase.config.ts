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

export const reduxFirebase = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableLogging: false,
};

export const reactReduxFirebaseConfig = {
  userProfile: 'users',
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

export const reactReduxFirebaseProps = {
  firebase: firebaseApp,
  config: reactReduxFirebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default { firebase: firebaseConfig, reduxFirebase };
