export enum RoomsAction {
  SELECTED = '@@rooms/SELECTED',
}

export interface RoomsState {
  readonly selectedRoom: string | null;
}
