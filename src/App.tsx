import React from 'react';
import { Provider } from 'react-redux';
import { reactReduxFirebaseProps } from './config/firebase.config';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { store } from './config/store.config';
import { BrowserRouter } from 'react-router-dom';

export interface AppProps {
  routes: any;
  store: any;
}

export default function App(props: AppProps) {
  const { routes } = props;
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
        <BrowserRouter>{routes}</BrowserRouter>
        {/*<CoreLayout />*/}
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
