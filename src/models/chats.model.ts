export interface IChatMessage {
  content: string;
  createdAt: string;
  uid: string;
}

export interface IChat {
  roomName: string;
  createdAt: string;
  messages: IChatMessage[];
  uid: string;
}

export interface IChatToArray extends IChat {
  id: string;
}
