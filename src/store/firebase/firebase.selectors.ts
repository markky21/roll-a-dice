import { AppState } from '../main';
import { IApplicationStats } from '../../models/firebase.model';

export const firebaseSelectors = {
  isRequesting: (state: AppState): boolean => !Object.values(state.firestore.status.requesting).every(v => !v),

  userProfile: (state: AppState) => state.firebase.auth,

  authenticatingSelector: (state: AppState) => {
    const {
      firebase: { auth, isInitializing },
    } = state;
    return !auth.isLoaded || isInitializing;
  },

  isAuthenticated: (state: AppState) => {
    const {
      firebase: { auth },
    } = state;
    return !auth.isEmpty && !!auth.uid;
  },

  userConnected: (state: AppState): boolean => state.firebase.data.connected,

  applicationStats: (state: AppState): IApplicationStats => state.firebase.data.applicationStats,
};
