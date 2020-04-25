import { AppState } from './main';
import { chatsSelectors } from './chats/chats.selectors';
import { IRoomCreateForm, IRoomPlayerProfileForm } from '../models/rooms.model';
import { createSelector } from 'reselect';

export const mainSelectors = {
  getAllNeededPlayersUid$: createSelector(
    [(state: AppState) => state.firestore.data.selectedRoom, chatsSelectors.profilesUidFromSelectedChat$],
    (selectedRoom, profilesUidFromSelectedChat) => {
      const selectedRoomPlayers = selectedRoom?.players || {};
      const selectedRoomGM = selectedRoom?.gameMasterUid;
      const selectedChatPlayers = profilesUidFromSelectedChat || [];

      return [...selectedChatPlayers, ...Object.keys(selectedRoomPlayers), selectedRoomGM].filter(
        (v, i, a) => !!v && a.indexOf(v) === i
      );
    }
  ),

  isGameMasterOfSelectedRoom$: createSelector(
    [
      (state: AppState) => state.firestore.data.selectedRoom,
      (state: AppState) => state.firestore.data.selectedRoom?.gameMasterUid,
      (state: AppState) => state.firebase.profile.uid,
    ],
    (selectedRoom, gameMasterUid, uid): boolean => {
      return uid === (selectedRoom ? gameMasterUid : 'unknown');
    }
  ),

  getFormCreateRoom$: createSelector(
    (state: AppState): IRoomCreateForm => state.form.createRoom.values,
    form => form
  ),

  getFormPlayerProfile$: createSelector(
    (state: AppState): IRoomPlayerProfileForm => state.form.playerProfile.values,
    form => form
  ),

  isUserARoomPlayerOrGameMaster$: createSelector(
    [
      (state: AppState) => state.firestore.data.selectedRoom,
      (state: AppState) => state.firebase.profile.uid,
      (state: AppState) => state.firestore.data.selectedRoom?.gameMasterUid,
      (state: AppState) => state.firestore.data.selectedRoom?.players,
    ],
    (selectedRoom, uid, gameMasterUid, players) => {
      if (!selectedRoom || !uid) return false;
      return !!players[uid] || gameMasterUid === uid;
    }
  ),
};
