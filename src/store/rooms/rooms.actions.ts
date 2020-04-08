import { action } from 'typesafe-actions';
import { RoomsAction } from './rooms.model';

export const roomsActions = {
  setSelectedRoom: (payload: string | null) => action(RoomsAction.SELECTED, payload),
  setDrawerOpenValue: (payload: boolean) => action(RoomsAction.SET_DRAWER_OPEN_VALUE, payload),
  setChatOpenValue: (payload: boolean) => action(RoomsAction.SET_CHAT_OPEN_VALUE, payload),
  setPlayersOpenValue: (payload: boolean) => action(RoomsAction.SET_PLAYERS_OPEN_VALUE, payload),
};
