import { ReduxFirestoreQuerySetting } from 'react-redux-firebase';
import { FirestoreCollection } from '../models/firestore.model';

export const chatsQuery = {
  getUserChats: (uids: string[]): ReduxFirestoreQuerySetting => {
    const uidsNonEmptyArray = uids.length === 0 ? ['unknown'] : uids;

    return {
      collection: FirestoreCollection.CHATS,
      where: [['uid', 'in', uidsNonEmptyArray]],
      storeAs: 'userChats',
    };
  },
};
