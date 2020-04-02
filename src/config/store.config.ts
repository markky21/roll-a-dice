import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { getFirebase } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';

import { makeRootReducer } from '../store/reducers/main';

const initialState = (window as any).___INITIAL_STATE__ || {
  firebase: { authError: null },
};

export const store = configureStore(initialState);

function configureStore(initialState: any): any {
  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];

  if (window && window.location && window.location.hostname === 'localhost') {
    const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [
    thunk.withExtraArgument({ getFirebase, getFirestore }),
    // This is where you add other middleware like redux-observable
  ];

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );

  if ((module as any).hot) {
    // Enable Webpack hot module replacement for reducers
    (module as any).hot.accept('../store/reducers/main', () => {
      const nextRootReducer = require('../store/reducers/main'); // eslint-disable-line global-require, @typescript-eslint/no-var-requires
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
