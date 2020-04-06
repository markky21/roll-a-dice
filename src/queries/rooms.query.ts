import { ReduxFirestoreQuerySetting } from 'react-redux-firebase';
import { FirestoreCollection } from '../models/firestore.model';

export const roomsQuery = {
  getUserRoomsAsGameMaster: (uid: string): ReduxFirestoreQuerySetting => ({
    collection: FirestoreCollection.ROOMS,
    where: [['gameMaster.uid', '==', uid]],
    storeAs: 'userRoomsAsGameMaster',
  }),
};
