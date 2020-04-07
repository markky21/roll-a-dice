import { ReduxFirestoreQuerySetting } from 'react-redux-firebase';
import { FirestoreCollection } from '../models/firestore.model';

export const chatsQuery = {
  getUserChats: (uid: string): ReduxFirestoreQuerySetting => {
    const uidNonEmptyArray = uid && uid?.length !== 0 ? uid : 'unknown';

    return {
      collection: FirestoreCollection.CHATS,
      where: [['players', 'array-contains', uidNonEmptyArray]],
      storeAs: 'userChats',
    };
  },
};
