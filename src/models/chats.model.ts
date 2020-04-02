export interface ChatMessages {
  content: string;
  createdAt: string;
  uid: string;
}

export interface Chat {
  count: number;
  gameName: string;
  createdAt: string;
  messages: ChatMessages;
  uid: string;
}
