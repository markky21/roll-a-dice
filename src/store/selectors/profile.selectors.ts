import { AppState } from '../reducers/main';

export const profileSelector = (state: AppState) => state.firebase.profile;
