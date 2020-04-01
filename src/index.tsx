import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { version } from '../package.json';
import { env } from './config/main.config';
import { initScripts } from './utils/initail.utils';
import {store} from "./config/store.config";
import {createRoutes} from "./routes";

// Window Variables
// ------------------------------------
(window as any).version = version;
(window as any).env = env;
initScripts();

// Store Initialization
// ------------------------------------

const routes = createRoutes(store);

ReactDOM.render(
  <App store={store} routes={routes} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
