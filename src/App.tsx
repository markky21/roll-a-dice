import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import { Core } from './containers/Core';
import { CreateRoutes } from './routes';
import { HashRouter } from 'react-router-dom';
import { reactReduxFirebaseProps } from './config/firebase.config';
import { store } from './config/store.config';
import { ToastContextC } from './contexts/Toast.context';

export interface AppProps {}

export default function App(props: AppProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          // TODO: provide theming
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  (window as any).theme = theme;

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
        <ThemeProvider theme={theme}>
          <ToastContextC>
            <Core>
              <HashRouter>
                <CreateRoutes />
              </HashRouter>
            </Core>
          </ToastContextC>
        </ThemeProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
