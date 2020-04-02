import { Collection } from '../models/main.model';
import { ReduxFirestoreQuerySetting } from 'react-redux-firebase';

export const userChatsQuery: (uid: string) => ReduxFirestoreQuerySetting = uid => ({
  collection: Collection.CHATS,
  where: [['uid', '==', uid]],
  storeAs: 'userChats',
});
