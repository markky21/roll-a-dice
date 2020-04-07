import { action } from 'typesafe-actions';
import { RoomsAction } from './rooms.model';

export const roomsActions = {
  setSelectedRoom: (payload: string | null) => action(RoomsAction.SELECTED, payload),
};
