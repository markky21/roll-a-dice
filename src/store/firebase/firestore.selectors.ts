import { AppState } from '../main';
import { Dictionary } from 'react-redux-firebase';
import { IChat } from '../../models/chats.model';
import { IPlayerProfile, IProfile, IRoom, IRoomCreateForm } from '../../models/rooms.model';

export const firestoreSelectors = {
  userChats: (state: AppState): Dictionary<IChat> | undefined => state.firestore.data.userChats,

  getChat: (chatId: string | null) => (state: AppState): IChat | null =>
    !!chatId && state.firestore.data.userChats ? state.firestore.data.userChats[chatId] : null,

  selectedRoom: (state: AppState): IRoom | undefined => state.firestore.data.selectedRoom,

  selectedRoomFormData: (state: AppState): IRoomCreateForm | undefined => {
    if (!state.firestore.data.selectedRoom) return;
    const {
      roomName,
      diceType,
      description,
      roomImage,
      gameMasterAvatar,
      campaignTitle,
      maxPlayers,
    } = state.firestore.data.selectedRoom;
    return { roomName, diceType, description, roomImage, gameMasterAvatar, campaignTitle, maxPlayers };
  },

  userRoomsAsGameMaster: (state: AppState): Dictionary<IRoom> | undefined => state.firestore.data.userRoomsAsGameMaster,

  userRoomsAsPlayer: (state: AppState): Dictionary<IRoom> | undefined => state.firestore.data.userRoomsAsPlayer,

  allUserRoomsUid: (state: AppState): string[] =>
    Object.keys({
      ...state.firestore.data.userRoomsAsGameMaster,
      ...state.firestore.data.userRoomsAsPlayer,
    }),

  usersProfiles: (state: AppState): Dictionary<IProfile> => state.firestore.data.usersProfiles || {},

  selectedRoomPlayers: (state: AppState): Dictionary<IPlayerProfile> => state.firestore.data.selectedRoom?.players,

  selectedRoomGameMasterUid: (state: AppState): string => state.firestore.data.selectedRoom?.gameMasterUid,

  selectedRoomLogs: (state: AppState) => state.firestore.data.selectedRoom?.logs,
};
