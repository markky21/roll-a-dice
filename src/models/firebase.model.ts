export enum FirestoreCollection {
  CHATS = 'chats',
  USERS = 'users',
  ROOMS = 'rooms',
}

export interface IApplicationStats {
  rooms: number;
  diceThrows: number;
  players: number;
}
