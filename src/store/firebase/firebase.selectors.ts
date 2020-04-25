import { AppState } from '../main';
import { IApplicationStats } from '../../models/firebase.model';
import { createSelector } from 'reselect';

export const firebaseSelectors = {
  isRequesting$: createSelector(
    (state: AppState) => state.firestore.status.requesting,
    requesting => !Object.values(requesting).every(v => !v)
  ),

  userProfile$: createSelector(
    (state: AppState) => state.firebase.auth,
    auth => auth
  ),

  authenticatingSelector$: createSelector(
    [(state: AppState) => state.firebase.auth, (state: AppState) => state.firebase.isInitializing],
    (auth, isInitializing) => !auth.isLoaded || isInitializing
  ),

  isAuthenticated$: createSelector(
    (state: AppState) => state.firebase.auth,
    auth => !auth.isEmpty && !!auth.uid
  ),

  userConnected$: createSelector(
    (state: AppState) => state.firebase.data.connected,
    connected => connected
  ),

  applicationStats$: createSelector(
    (state: AppState) => state.firebase.data.applicationStats,
    applicationStats => applicationStats
  ),
};
