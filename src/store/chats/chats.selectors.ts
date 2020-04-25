import { AppState } from '../main';
import { createSelector } from 'reselect';

export const chatsSelectors = {
  selectedChat$: createSelector(
    (state: AppState) => state.chats.selectedChat,
    selectedChat => selectedChat
  ),

  profilesUidFromSelectedChat$: createSelector(
    [(state: AppState) => state.firestore.data?.userChats, (state: AppState) => state.chats.selectedChat],
    (userChats, selectedChat) => {
      if (!selectedChat) return [];
      return userChats?.[selectedChat]?.players || [];
    }
  ),
};
