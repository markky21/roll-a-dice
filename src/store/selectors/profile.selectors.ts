import { AppState } from '../reducers/main';

export const profileSelector = (state: AppState) => {
  const {
    firebase: { profile },
  } = state;
  return profile;
};
