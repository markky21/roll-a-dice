export enum RoomsAction {
  SELECTED = '@@rooms/SELECTED',
  SET_DRAWER_OPEN_VALUE = '@@rooms/SET_DRAWER_OPEN_VALUE',
  SET_CHAT_OPEN_VALUE = '@@rooms/SET_CHAT_OPEN_VALUE',
  SET_PLAYERS_OPEN_VALUE = '@@rooms/SET_PLAYERS_OPEN_VALUE',
  SET_DICE_ROLLING = '@@rooms/SET_DICE_ROLLING',
}

export interface RoomsState {
  readonly selectedRoom: string | null;
  readonly drawerOpened: boolean;
  readonly chatOpened: boolean;
  readonly playersOpened: boolean;
  readonly diceRolling: boolean;
}
