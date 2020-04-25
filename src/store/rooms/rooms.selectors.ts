import { AppState } from '../main';
import { createSelector } from 'reselect';

export const roomsSelectors = {
  selectedRoomUid$: createSelector(
    (state: AppState) => state.rooms.selectedRoom,
    selectedRoom => selectedRoom
  ),
  drawerOpened$: createSelector(
    (state: AppState) => state.rooms.drawerOpened,
    createSelector => createSelector
  ),
  chatOpened$: createSelector(
    (state: AppState) => state.rooms.chatOpened,
    chatOpened => chatOpened
  ),
  playersOpened$: createSelector(
    (state: AppState) => state.rooms.playersOpened,
    playersOpened => playersOpened
  ),
  diceRolling$: createSelector(
    (state: AppState) => state.rooms.diceRolling,
    diceRolling => diceRolling
  ),
};
