import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {version} from '../package.json';
import {env} from './config/main.config';
import {initScripts} from './utils/initail.utils';

// Window Variables
// ------------------------------------
(window as any).version = version;
(window as any).env = env;
initScripts();

// Store Initialization
// ------------------------------------



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
