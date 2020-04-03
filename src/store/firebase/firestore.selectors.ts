import { AppState } from '../main';
import { Dictionary } from 'react-redux-firebase';
import { IChat } from '../../models/chats.model';
import { Profile } from '../../models/rooms.model';

export const firestoreSelectors = {
  userChats: (state: AppState): Dictionary<IChat> | undefined => state.firestore.data.userChats,

  getChat: (chatId: string | null) => (state: AppState): IChat | null =>
    !!chatId && state.firestore.data.userChats ? state.firestore.data.userChats[chatId] : null,

  usersProfiles: (state: AppState): Dictionary<Profile> => state.firestore.data.usersProfiles || {},
};
