export enum Log {
  DICE_ROLL = 'DICE_ROLL',
}

export enum Dice {
  D4 = 'd4',
  D6 = 'd6',
  D8 = 'd8',
  D10 = 'd10',
  D12 = 'd12',
  D20 = 'd20',
  D100 = 'd100',
}

export interface IProfile {
  uid: string;
  avatarUrl: string;
  displayName: string;
  email: string;
}

export interface IRoomLog {
  timestamp: string;
  type: Log;
  author: IProfile;
  value: string | number;
}

export interface IRoom {
  createdAt: string;
  lastGame: string;
  name: string;
  description: string;
  players: IProfile[];
  logs: IRoomLog[];
}

export interface IRoomCreateForm {
  roomName: string;
  diceType: Dice[];
  description: []
}
