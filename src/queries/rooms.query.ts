import { ReduxFirestoreQuerySetting } from 'react-redux-firebase';
import { FirestoreCollection } from '../models/firebase.model';

export const roomsQuery = {
         getUserRoomsAsGameMaster: (uid: string): ReduxFirestoreQuerySetting => ({
           collection: FirestoreCollection.ROOMS,
           where: [['gameMaster.uid', '==', uid]],
           storeAs: 'userRoomsAsGameMaster',
         }),

         getUserRoomsAsPlayer: (uid: string): ReduxFirestoreQuerySetting => ({
           collection: FirestoreCollection.ROOMS,
           where: [['playersUid', 'array-contains', uid]],
           storeAs: 'userRoomsAsPlayer',
         }),

         getRoom: (DocUid: string): ReduxFirestoreQuerySetting => {
           const doc = DocUid.length ? DocUid : 'unknown';
           return {
             collection: FirestoreCollection.ROOMS,
             doc,
             storeAs: 'selectedRoom',
           };
         },
       };
