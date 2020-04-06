import { ReduxFirestoreQuerySetting } from 'react-redux-firebase';
import { FirestoreCollection } from '../models/firestore.model';

export const chatsQuery = {
  getUserChats: (uid: string): ReduxFirestoreQuerySetting => ({
    collection: FirestoreCollection.CHATS,
    where: [['uid', '==', uid]],
    storeAs: 'userChats',
  }),
};
