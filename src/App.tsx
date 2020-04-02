import React from 'react';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import { reactReduxFirebaseProps } from './config/firebase.config';
import { store } from './config/store.config';
import { BrowserRouter } from 'react-router-dom';
import { createRoutes } from './routes';

export interface AppProps {}

export default function App(props: AppProps) {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
        <BrowserRouter>{createRoutes()}</BrowserRouter>
        {/*<CoreLayout />*/}
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
