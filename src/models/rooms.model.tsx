import React from 'react';
import { Dice, IDiceThrow } from './dice.model';
import { Dictionary } from 'react-redux-firebase';

export enum Log {
  DICE_ROLL = 'DICE_ROLL',
  NEW_PLAYER = 'NEW_PLAYER',
}

export interface IProfile {
  uid: string;
  avatarUrl?: string;
  displayName: string;
  email: string;
  photoURL: string;
  connected?: boolean;
}

export interface IPlayerProfile extends IProfile {
  characterName?: string;
  characterAvatarUrl?: string;
  characterDescription?: string;
  notes?: string;
  gameMaster?: boolean;
}

export interface IRoomLog {
  timestamp: number;
  type: Log;
  authorUid: string;
  payload?: IDiceThrow;
}

export interface IRoom extends IRoomCreateForm {
  createdAt: string;
  gameMasterUid: string;
  players: Dictionary<IPlayerProfile>;
  playersUid: string[];
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

export interface IRoomPlayerProfileForm extends IPlayerProfile {}

export const createRoomFormModel = {
  roomName: { name: 'roomName', label: 'Name of the Room *', fullWidth: true },
  description: { name: 'description', label: 'Room description', multiline: true, fullWidth: true },
  campaignTitle: { name: 'campaignTitle', label: 'Current campaign tittle', fullWidth: true },
  roomImage: { name: 'roomImage', label: 'Room image URL', fullWidth: true },
  gameMasterAvatar: { name: 'gameMasterAvatar', label: 'Game master avatar URL', fullWidth: true },
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
};

export const diceDashboardFormModel = {
  d4: { label: <span style={{ width: '48px', display: 'inline-block' }}>{Dice.D4}</span>, name: Dice.D4 },
  d6: { label: <span style={{ width: '48px', display: 'inline-block' }}>{Dice.D6}</span>, name: Dice.D6 },
  d8: { label: <span style={{ width: '48px', display: 'inline-block' }}>{Dice.D8}</span>, name: Dice.D8 },
  d10: { label: <span style={{ width: '48px', display: 'inline-block' }}>{Dice.D10}</span>, name: Dice.D10 },
  d12: { label: <span style={{ width: '48px', display: 'inline-block' }}>{Dice.D12}</span>, name: Dice.D12 },
  d20: { label: <span style={{ width: '48px', display: 'inline-block' }}>{Dice.D20}</span>, name: Dice.D20 },
  d100: { label: <span style={{ width: '48px', display: 'inline-block' }}>{Dice.D100}</span>, name: Dice.D100 },
};

export const playersCharacterFormModel = {
  characterName: { name: 'characterName', label: 'Name of character', fullWidth: true, maxLength: 80 },
  characterAvatarUrl: { name: 'characterAvatarUrl', label: 'Character avatar URL', fullWidth: true, maxLength: 256 },
  characterDescription: {
    name: 'characterDescription',
    label: 'Character description',
    multiline: true,
    fullWidth: true,
    maxLength: 1024,
  },
  notes: {
    name: 'notes',
    label: 'Notes (not visible for other players)',
    multiline: true,
    fullWidth: true,
    maxLength: 2024,
  },
};
