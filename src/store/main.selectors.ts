import { AppState } from './main';
import { firestoreSelectors } from './firebase/firestore.selectors';
import { chatsSelectors } from './chats/chats.selectors';
import {IRoomCreateForm, IRoomPlayerProfileForm} from '../models/rooms.model';

export const mainSelectors = {
  getAllNeededPlayersUid: (state: AppState): string[] => {
    const selectedRoomPlayers = firestoreSelectors.selectedRoom(state)?.players || {};
    const selectedRoomGM = firestoreSelectors.selectedRoom(state)?.gameMasterUid;
    const selectedChatPlayers = chatsSelectors.profilesUidFromSelectedChat(state) || [];
    return [...selectedChatPlayers, ...Object.keys(selectedRoomPlayers), selectedRoomGM].filter(
      (v, i, a) => !!v && a.indexOf(v) === i
    );
  },

  isGameMasterOfSelectedRoom: (state: AppState): boolean => {
    const selectedRoomGameMaster = state.firestore.data.selectedRoom
      ? state.firestore.data.selectedRoom.gameMasterUid
      : 'unknown';

    return selectedRoomGameMaster === state.firebase.profile.uid;
  },

  getFormCreateRoom: (state: AppState): IRoomCreateForm => state.form.createRoom.values,

  getFormPlayerProfile: (state: AppState): IRoomPlayerProfileForm => state.form.playerProfile.values,

  isUserARoomPlayerOrGameMaster: (state: AppState): boolean => {
    if (!state.firestore.data.selectedRoom || !state.firebase.profile.uid) return false;
    return (
      !!state.firestore.data.selectedRoom?.players[state.firebase.profile.uid] ||
      state.firestore.data.selectedRoom?.gameMasterUid === state.firebase.profile.uid
    );
  },
};
