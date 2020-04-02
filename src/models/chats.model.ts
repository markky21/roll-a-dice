export interface ChatMessage {
  content: string;
  createdAt: string;
  uid: string;
}

export interface Chat {
  count: number;
  gameName: string;
  createdAt: string;
  messages: ChatMessage[];
  uid: string;
}
