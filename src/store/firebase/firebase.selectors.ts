import { AppState } from '../main';

export const profileSelector = (state: AppState) => state.firebase.profile;

export const authenticatingSelector = (state: AppState) => {
  const {
    firebase: { auth, isInitializing },
  } = state;
  return !auth.isLoaded || isInitializing;
};

export const authenticatedSelector = (state: AppState) => {
  const {
    firebase: { auth },
  } = state;
  return !auth.isEmpty && !!auth.uid;
};
