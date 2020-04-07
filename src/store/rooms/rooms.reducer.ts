import { Reducer } from 'redux';
import { RoomsAction, RoomsState } from './rooms.model';

export const initialState: RoomsState = {
  selectedRoom: null,
};

export const roomsReducer: Reducer<RoomsState> = (state = initialState, action) => {
  switch (action.type) {
    case RoomsAction.SELECTED: {
      return { ...state, selectedRoom: action.payload };
    }
    default: {
      return state;
    }
  }
};
