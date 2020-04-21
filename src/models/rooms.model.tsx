import { Dice, IDiceThrow } from './dice.model';
import React from 'react';

export enum Log {
  DICE_ROLL = 'DICE_ROLL',
}

export interface IProfile {
  uid: string;
  avatarUrl?: string;
  displayName: string;
  email: string;
  photoURL: string;
  connected?: boolean;
}

export interface IRoomLog {
  timestamp: string;
  type: Log;
  authorUid: string;
  payload: IDiceThrow;
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
  roomImage: string;
  gameMasterAvatar: string;
  campaignTitle: string;
  maxPlayers: number;
}

export const createRoomFormModel = {
  roomName: { name: 'roomName', label: 'Name of the Room *', fullWidth: true },
  description: { name: 'description', label: 'Room description', multiline: true, fullWidth: true },
  campaignTitle: { name: 'campaignTitle', label: 'Current campaign tittle', multiline: false, fullWidth: true },
  roomImage: { name: 'roomImage', label: 'Room image URL', multiline: false, fullWidth: true },
  gameMasterAvatar: { name: 'gameMasterAvatar', label: 'Game master avatar URL', multiline: false, fullWidth: true },
  maxPlayers: {
    name: 'maxPlayers',
    label: 'Maximum players *',
    multiline: false,
    fullWidth: true,
    type: 'number',
    InputProps: { inputProps: { min: 1, max: 8 } },
  },
  diceType: {
    name: 'diceType',
    label: 'Allowed dice *',
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
  d4: { label: <span style={{ width: '48px', display: 'inline-block' }}>{Dice.D4}</span>, name: Dice.D4 },
  d6: { label: <span style={{ width: '48px', display: 'inline-block' }}>{Dice.D6}</span>, name: Dice.D6 },
  d8: { label: <span style={{ width: '48px', display: 'inline-block' }}>{Dice.D8}</span>, name: Dice.D8 },
  d10: { label: <span style={{ width: '48px', display: 'inline-block' }}>{Dice.D10}</span>, name: Dice.D10 },
  d12: { label: <span style={{ width: '48px', display: 'inline-block' }}>{Dice.D12}</span>, name: Dice.D12 },
  d20: { label: <span style={{ width: '48px', display: 'inline-block' }}>{Dice.D20}</span>, name: Dice.D20 },
  d100: { label: <span style={{ width: '48px', display: 'inline-block' }}>{Dice.D100}</span>, name: Dice.D100 },
};

export const diceSetFormModel = {
  diceD4: { name: Dice.D4, label: Dice.D4, defaultValue: 1 },
  diceD6: { name: Dice.D6, label: Dice.D6, defaultValue: 1 },
  diceD8: { name: Dice.D8, label: Dice.D8, defaultValue: 1 },
  diceD10: { name: Dice.D10, label: Dice.D10, defaultValue: 1 },
  diceD12: { name: Dice.D12, label: Dice.D12, defaultValue: 1 },
  diceD20: { name: Dice.D20, label: Dice.D20, defaultValue: 1 },
  diceD100: { name: Dice.D100, label: Dice.D100, defaultValue: 1 },
};

export interface IDiceDashboardForm {
  [key: string]: number;
}
