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
}

export interface FirebaseUserProfile {
  email: string;
}
