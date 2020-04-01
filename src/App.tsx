import React from 'react';
import { Home } from './Home';
import { Provider } from 'react-redux';
import { reactReduxFirebaseProps } from './config/firebase.config';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { store } from './config/store.config';

export default function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
        <Home />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
