import { AppState } from '../main';

export const roomsSelectors = {
  selectedRoomUid: (state: AppState): string | null => state.rooms.selectedRoom || null,
  drawerOpened: (state: AppState): boolean => state.rooms.drawerOpened,
  chatOpened: (state: AppState): boolean => state.rooms.chatOpened,
  playersOpened: (state: AppState): boolean => state.rooms.playersOpened,
  diceRolling: (state: AppState): boolean => state.rooms.diceRolling,
};
