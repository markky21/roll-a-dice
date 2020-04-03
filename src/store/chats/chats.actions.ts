import { action } from 'typesafe-actions';
import { ChatsAction } from './chats.model';

export const chatsActions = {
  setSelectedChat: (payload: string | null) => action(ChatsAction.SELECTED, payload),
};
