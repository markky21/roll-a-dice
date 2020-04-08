import { Reducer } from 'redux';
import { RoomsAction, RoomsState } from './rooms.model';

export const initialState: RoomsState = {
  selectedRoom: null,
  drawerOpened: true,
  chatOpened: true,
  playersOpened: true,
};

export const roomsReducer: Reducer<RoomsState> = (state = initialState, action) => {
  switch (action.type) {
    case RoomsAction.SELECTED: {
      return { ...state, selectedRoom: action.payload };
    }
    case RoomsAction.SET_DRAWER_OPEN_VALUE: {
      return { ...state, drawerOpened: action.payload };
    }
    case RoomsAction.SET_CHAT_OPEN_VALUE: {
      return { ...state, chatOpened: action.payload };
    }
    case RoomsAction.SET_PLAYERS_OPEN_VALUE: {
      return { ...state, playersOpened: action.payload };
    }
    default: {
      return state;
    }
  }
};
