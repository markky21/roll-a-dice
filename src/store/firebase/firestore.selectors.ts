import { AppState } from '../main';
import { Dictionary } from 'react-redux-firebase';
import { Chat } from '../../models/chats.model';
import { Profile } from '../../models/rooms.model';

export const firestoreSelectors = {
  userChats: (state: AppState): Dictionary<Chat> | undefined => state.firestore.data.userChats,

  getChat: (chatId: string | null) => (state: AppState): Chat | null =>
    !!chatId && state.firestore.data.userChats ? state.firestore.data.userChats[chatId] : null,

  usersProfiles: (state: AppState): Dictionary<Profile> => state.firestore.data.usersProfiles || {},
};
