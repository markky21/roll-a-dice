import { Dictionary } from 'react-redux-firebase';

import { Profile, Room } from '../../models/rooms.model';
import { Chat } from '../../models/chats.model';

export interface TodoValue {
  text: string;
  done: boolean;
}

interface FirebaseSchema {
  todos: TodoValue[];
}

export interface FirestoreSchema {
  chats: Dictionary<Chat>;
  rooms: Dictionary<Room>;
  users: Dictionary<Profile>;
}

export interface FirestoreQuerySchema {
  userChats?: Dictionary<Chat>;
}

export interface FirebaseUserProfile {
  email: string;
}
