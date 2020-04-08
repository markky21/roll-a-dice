import { Dictionary } from 'react-redux-firebase';

import { IProfile, IRoom } from '../../models/rooms.model';
import { IChat } from '../../models/chats.model';

// TODO: to remove
export interface TodoValue {
  text: string;
  done: boolean;
}

export interface FirestoreSchema {
  readonly chats: Dictionary<IChat>;
  readonly rooms: Dictionary<IRoom>;
  readonly users: Dictionary<IProfile>;
}

export interface FirestoreQuerySchema {
  readonly userChats?: Dictionary<IChat>;
  readonly userRoomsAsPlayer?: Dictionary<IRoom>;
  readonly userRoomsAsGameMaster?: Dictionary<IRoom>;
  readonly usersProfiles?: Dictionary<IProfile>;
  readonly selectedRoom?: IRoom;
}

export interface FirebaseQuerySchema {
  connected: boolean;
}

export interface FirebaseUserProfile {
  email: string;
  status: boolean;
}
