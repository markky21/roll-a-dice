import { AppState } from '../main';

export const chatsSelectors = {
  selectedChat: (state: AppState): string | null => state.chats.selectedChat,

  uniqProfilesUid: (selectedChat: string | null) => (state: AppState): string[] => {
    if (!selectedChat) return [];

    return (
      state.firestore.data?.userChats?.[selectedChat]?.messages
        .map(m => m.uid)
        .filter((v, i, a) => a.indexOf(v) === i) || []
    );
  },
};
