import {Dice, IDiceThrowResult} from './dice.model';

export enum Log {
  DICE_ROLL = 'DICE_ROLL',
}

export interface IProfile {
  uid: string;
  avatarUrl: string;
  displayName: string;
  email: string;
  photoURL: string;
  connected?: boolean;
}

export interface IRoomLog {
  timestamp: string;
  type: Log;
  authorUid: string;
  payload: Omit<IDiceThrowResult, 'emit'>
}

export interface IRoom extends IRoomCreateForm {
  createdAt: string;
  gameMaster: IProfile;
  players: string[];
  logs: IRoomLog[];
  chatUid?: string;
}

export interface IRoomCreateForm {
  roomName: string;
  diceType: Dice[];
  description: string;
}

export const createRoomFormModel = {
  roomName: { name: 'roomName', label: 'Name of the Room', fullWidth: true },
  diceType: {
    name: 'diceType',
    label: 'Allowed dice',
    options: [
      { label: Dice.D4, value: Dice.D4 },
      { label: Dice.D6, value: Dice.D6 },
      { label: Dice.D8, value: Dice.D8 },
      { label: Dice.D10, value: Dice.D10 },
      { label: Dice.D12, value: Dice.D12 },
      { label: Dice.D20, value: Dice.D20 },
      { label: Dice.D100, value: Dice.D100 },
    ],
  },
  description: { name: 'description', label: 'Room description', multiline: true, fullWidth: true },
};
