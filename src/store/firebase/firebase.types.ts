import { Dictionary } from 'react-redux-firebase';

import { IProfile, IRoom } from '../../models/rooms.model';
import { IChat } from '../../models/chats.model';
import { IApplicationStats } from '../../models/firebase.model';

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
  readonly connected: boolean;
  readonly applicationStats?: IApplicationStats;
}

export interface FirebaseUserProfile {
  email: string;
  status: boolean;
}
