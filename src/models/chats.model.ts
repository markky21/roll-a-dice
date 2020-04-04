export interface IChatMessage {
  content: string;
  createdAt: string;
  uid: string;
}

export interface IChat {
  count: number;
  gameName: string;
  createdAt: string;
  messages: IChatMessage[];
  uid: string;
}

export interface IChatToArray extends IChat {
  id: string;
}
