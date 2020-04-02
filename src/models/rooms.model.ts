export enum Log {
  DICE_ROLL = 'DICE_ROLL',
}

export interface Profile {
  uid: string
  avatarUrl: string;
  displayName: string;
  email: string;
}

export interface RoomLog {
  timestamp: string;
  type: Log;
  author: Profile;
  value: string | number;
}

export interface Room {
  name: string;
  description: string;
  players: Profile[];
  logs: RoomLog[];
}
