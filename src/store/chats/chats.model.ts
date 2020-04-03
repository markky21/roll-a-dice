export enum ChatsAction {
  SELECTED = '@@chats/SELECTED',
}

export interface ChatsState {
  readonly selectedChat: string | null;
}
