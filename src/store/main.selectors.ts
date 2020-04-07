import {AppState} from './main';
import {firestoreSelectors} from './firebase/firestore.selectors';
import {chatsSelectors} from './chats/chats.selectors';

export const mainSelectors = {
  getAllNeededPlayersUid: (state: AppState) => {
    const selectedRoomPlayers = firestoreSelectors.selectedRoom(state)?.players || [];
    const selectedChatPlayers = chatsSelectors.profilesUidFromSelectedChat(state) || [];
    return [...selectedChatPlayers, ...selectedRoomPlayers].filter((v, i, a) => a.indexOf(v) === i);
  },
};
