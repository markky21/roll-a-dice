import { IProfile } from './rooms.model';

export interface IChatMessage {
  content: string;
  createdAt: string;
  uid: string;
}

export interface IChat {
  roomName: string;
  createdAt: string;
  messages: IChatMessage[];
  roomUid: string;
  players: string[];
}

export interface IChatToArray extends IChat {
  id: string;
}
