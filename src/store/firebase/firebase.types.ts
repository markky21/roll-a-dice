import { Dictionary } from 'react-redux-firebase';

import { Profile, Room } from '../../models/rooms.model';
import { Chat } from '../../models/chats.model';

// TODO: to remove
export interface TodoValue {
  text: string;
  done: boolean;
}

export interface FirestoreSchema {
  readonly chats: Dictionary<Chat>;
  readonly rooms: Dictionary<Room>;
  readonly users: Dictionary<Profile>;
}

export interface FirestoreQuerySchema {
  readonly userChats?: Dictionary<Chat>;
  readonly usersProfiles?: Dictionary<Profile>;
}

export interface FirebaseUserProfile {
  email: string;
}
