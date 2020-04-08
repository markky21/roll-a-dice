import { AppState } from './main';
import { firestoreSelectors } from './firebase/firestore.selectors';
import { chatsSelectors } from './chats/chats.selectors';

export const mainSelectors = {
  getAllNeededPlayersUid: (state: AppState): string[] => {
    const selectedRoomPlayers = firestoreSelectors.selectedRoom(state)?.players || [];
    const selectedChatPlayers = chatsSelectors.profilesUidFromSelectedChat(state) || [];
    return [...selectedChatPlayers, ...selectedRoomPlayers].filter((v, i, a) => a.indexOf(v) === i);
  },

  isGameMasterOfSelectedRoom: (state: AppState): boolean => {
    const selectedRoomGameMaster = state.firestore.data.selectedRoom
      ? state.firestore.data.selectedRoom.gameMaster.uid
      : 'unknown';

    return selectedRoomGameMaster === state.firebase.profile.uid;
  },
};
