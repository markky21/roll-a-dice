import { Data, Dictionary, FirebaseReducer } from 'react-redux-firebase';
import { Profile, Room } from '../../models/rooms.model';

export interface TodoValue {
  text: string;
  done: boolean;
}

interface FirebaseSchema {
  rooms: Room[];
  todos: TodoValue[];
}

export interface FirebaseUserProfile {
  email: string;
}
