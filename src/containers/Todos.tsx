import React from 'react';
import {
  isLoaded,
  isEmpty,
  useFirebaseConnect,
  useFirestoreConnect,
} from 'react-redux-firebase';
import Todo from './Todo';
import { useSelector } from 'react-redux';
import { AppState } from '../store/reducers/main';

function Todos() {
  useFirestoreConnect(() => [
    { collection: 'rooms' }, // or `todos/${props.todoId}`
  ]);

  useFirebaseConnect([{ path: 'todos', queryParams: ['limitToLast=10'] }]);
  const todos = useSelector((state: AppState) => {
    return state.firebase.ordered.todos;
  });

  if (!isLoaded(todos)) {
    return <div>Loading...</div>;
  }

  if (isEmpty(todos)) {
    return <div>No Todos Found</div>;
  }

  return (
    <div className="Todos">
      {/*<h2>Rooms {rooms}</h2>*/}
      {todos &&
        todos.map(todoItem => {
          return <Todo key={todoItem.key} todoId={todoItem.key} />;
        })}
    </div>
  );
}

export default Todos;
