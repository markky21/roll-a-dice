import { Action, combineReducers, Reducer } from 'redux';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import { reducer as form } from 'redux-form';

export function makeRootReducer<S = any, A extends Action = Action>(
  asyncReducers?: Reducer<S, A>
) {
  return combineReducers({
    // Add sync reducers here
    firebase,
    form,
    ...asyncReducers,
  });
}
