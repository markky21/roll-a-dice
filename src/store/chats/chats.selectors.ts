import { AppState } from '../main';

export const chatsSelectors = {
  selectedChat: (state: AppState): string | null => state.chats.selectedChat,

  profilesUidFromSelectedChat: (state: AppState): string[] => {
    if (!state.chats.selectedChat) return [];

    return state.firestore.data?.userChats?.[state.chats.selectedChat]?.players || [];
  },
};
