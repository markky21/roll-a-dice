import { AppState } from '../main';
import { createSelector } from 'reselect';

export const firestoreSelectors = {
  userChats$: createSelector(
    (state: AppState) => state.firestore.data.userChats,
    userChats => userChats
  ),

  getChat$: createSelector(
    [(state: AppState) => state.firestore.data.userChats, (state: AppState) => state.chats.selectedChat],
    (userChats, chatId) => {
      return userChats?.[chatId];
    }
  ),

  selectedRoom$: createSelector(
    (state: AppState) => state.firestore.data.selectedRoom,
    selectedRoom => selectedRoom
  ),

  selectedRoomFormData$: createSelector(
    (state: AppState) => state.firestore.data.selectedRoom,
    selectedRoom => {
      if (!selectedRoom) return;
      const { roomName, diceType, description, roomImage, gameMasterAvatar, campaignTitle, maxPlayers } = selectedRoom;
      return { roomName, diceType, description, roomImage, gameMasterAvatar, campaignTitle, maxPlayers };
    }
  ),

  userRoomsAsGameMaster$: createSelector(
    (state: AppState) => state.firestore.data.userRoomsAsGameMaster,
    userRoomsAsGameMaster => userRoomsAsGameMaster
  ),

  userRoomsAsPlayer$: createSelector(
    (state: AppState) => state.firestore.data.userRoomsAsPlayer,
    userRoomsAsPlayer => userRoomsAsPlayer
  ),

  usersProfiles$: createSelector(
    (state: AppState) => state.firestore.data.usersProfiles,
    usersProfiles => usersProfiles || {}
  ),

  selectedRoomPlayers$: createSelector(
    (state: AppState) => state.firestore.data.selectedRoom?.players,
    players => players || {}
  ),

  selectedRoomGameMasterUid$: createSelector(
    (state: AppState) => state.firestore.data.selectedRoom?.gameMasterUid,
    gameMasterUid => gameMasterUid
  ),

  selectedRoomLogs$: createSelector(
    (state: AppState) => state.firestore.data.selectedRoom?.logs,
    logs => logs
  ),
};
