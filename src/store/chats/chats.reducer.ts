import { Reducer } from 'redux';
import { ChatsAction, ChatsState } from './chats.model';

export const initialState: ChatsState = {
  selectedChat: null,
};

export const chatsReducer: Reducer<ChatsState> = (state = initialState, action) => {
  switch (action.type) {
    case ChatsAction.SELECTED: {
      return { ...state, selectedChat: action.payload };
    }
    default: {
      return state;
    }
  }
};
