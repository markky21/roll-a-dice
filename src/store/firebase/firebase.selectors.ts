import { AppState } from '../main';

export const firebaseSelectors = {
  isRequesting: (state: AppState): boolean => !Object.values(state.firestore.status.requesting).every(v => !v),

  userProfile: (state: AppState) => state.firebase.profile,

  authenticatingSelector: (state: AppState) => {
    const {
      firebase: { auth, isInitializing },
    } = state;
    return !auth.isLoaded || isInitializing;
  },

  authenticatedSelector: (state: AppState) => {
    const {
      firebase: { auth },
    } = state;
    return !auth.isEmpty && !!auth.uid;
  },

  userConnected: (state: AppState) => state.firebase.data.connected,
};
