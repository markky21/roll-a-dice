import { AppState } from '../reducers/main';

export const userChatsSelector = (state: AppState) =>
  state.firestore.data.userChats;
