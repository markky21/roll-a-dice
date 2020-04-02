export enum ChatsAction {
  SELECTED = '@@heroes/SELECTED',
}

export interface ChatsState {
  readonly selectedChat: string | null;
}
