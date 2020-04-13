import { AppState } from '../main';
import { Dictionary } from 'react-redux-firebase';
import { IChat } from '../../models/chats.model';
import { IProfile, IRoom } from '../../models/rooms.model';

export const firestoreSelectors = {
  userChats: (state: AppState): Dictionary<IChat> | undefined => state.firestore.data.userChats,

  getChat: (chatId: string | null) => (state: AppState): IChat | null =>
    !!chatId && state.firestore.data.userChats ? state.firestore.data.userChats[chatId] : null,

  selectedRoom: (state: AppState): IRoom | undefined => state.firestore.data.selectedRoom,

  userRoomsAsGameMaster: (state: AppState): Dictionary<IRoom> | undefined => state.firestore.data.userRoomsAsGameMaster,

  userRoomsAsPlayer: (state: AppState): Dictionary<IRoom> | undefined => state.firestore.data.userRoomsAsPlayer,

  allUserRoomsUid: (state: AppState): string[] =>
    Object.keys({
      ...state.firestore.data.userRoomsAsGameMaster,
      ...state.firestore.data.userRoomsAsPlayer,
    }),

  usersProfiles: (state: AppState): Dictionary<IProfile> => state.firestore.data.usersProfiles || {},

  selectedRoomPlayers: (state: AppState): IProfile[] => {
    const usersProfiles: Dictionary<IProfile> = state.firestore.data.usersProfiles || {};
    const playersUid = state.firestore.data.selectedRoom?.players || [];

    return playersUid.map((uid: string) => usersProfiles[uid]).filter((p: IProfile) => !!p);
  },

  selectedRoomGameMasterProfile: (state: AppState): IProfile | null => {
    const usersProfiles: Dictionary<IProfile> = state.firestore.data.usersProfiles || {};
    const uid = state.firestore.data.selectedRoom?.gameMaster.uid;

    return usersProfiles && uid ? usersProfiles[uid] : null;
  },
};