import { AppState } from '../main';

export const roomsSelectors = {
  selectedRoom: (state: AppState): string | null => state.rooms.selectedRoom,
};
