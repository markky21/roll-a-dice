import React from 'react';
import Todos from '../containers/Todos';
import AddTodo from '../components/AddTodo';
import '../App.css';
import { useFirebase } from 'react-redux-firebase';

export function HomeC() {
  const firebase = useFirebase();

  const googleLogin = () =>
    firebase
      .login({ provider: 'google', type: 'popup' })
      .catch(err => alert(err.message));

  return (
    <div className="Home">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <button onClick={googleLogin}>Google</button>
        </p>
        <div>
          <Todos />
          <AddTodo />
        </div>
      </header>
    </div>
  );
}

export const Home = {
  path: '/',
  component: HomeC,
};
