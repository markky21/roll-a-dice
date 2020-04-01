import { AppState } from '../reducers/todo.reducer';

export const profileSelector = (state: AppState) => {
  const {
    firebase: { profile },
  } = state;
  return profile;
};
