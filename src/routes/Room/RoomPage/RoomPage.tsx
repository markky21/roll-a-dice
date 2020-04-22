import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';

import { chatsActions } from '../../../store/chats/chats.actions';
import { firebaseSelectors } from '../../../store/firebase/firebase.selectors';
import { FirestoreCollection } from '../../../models/firebase.model';
import { firestoreSelectors } from '../../../store/firebase/firestore.selectors';
import { locationActions } from '../../../store/location/location.actions';
import { LocationMatch } from '../../../store/location/location.model';
import { locationSelectors } from '../../../store/location/location.selectors';
import { roomsActions } from '../../../store/rooms/rooms.actions';
import { roomsSelectors } from '../../../store/rooms/rooms.selectors';
import { DiceServiceContextC } from '../../../contexts/DiceService.context';
import { RoomView } from './components/RoomPageView';
import { IPlayerProfile, IRoomLog, Log } from '../../../models/rooms.model';

//

export interface RoomListProps {
  match: LocationMatch;
}

export function RoomC(props: RoomListProps) {
  const { match } = props;

  const dispatch = useDispatch();
  const firestore = useFirestore();

  const selectedRoomData = useSelector(firestoreSelectors.selectedRoom);
  const selectedRoomUid = useSelector(roomsSelectors.selectedRoomUid);
  const storeLocationMatch = useSelector(locationSelectors.match);
  const userProfile = useSelector(firebaseSelectors.userProfile);

  /**
   * Effects logic
   */
  function onChangeSetLocationMatch(): void {
    if (JSON.stringify(match) !== JSON.stringify(storeLocationMatch)) {
      dispatch(locationActions.matchChange(match));
    }
    dispatch(roomsActions.setSelectedRoom((storeLocationMatch.params as any)['roomId']));
  }
  function onUnmountSetSelectedRoomToNull(): void {
    dispatch(roomsActions.setSelectedRoom(null));
  }
  function onChangeSetSelectedChat(): void {
    dispatch(chatsActions.setSelectedChat(selectedRoomData?.chatUid || null));
  }
  function onEnterTheRoomAddUserToPlayers(): void {
    if (!selectedRoomData) return;

    if (selectedRoomData?.maxPlayers <= Object.keys(selectedRoomData.players).length) {
      // TODO toast message
      return;
    }
    if (!selectedRoomData?.players || !userProfile.uid || selectedRoomData.gameMasterUid === userProfile.uid) return;
    if (selectedRoomData.players[userProfile.uid]) return;

    const documentRef = firestore.doc(`${FirestoreCollection.ROOMS}/${selectedRoomUid}`);
    firestore.runTransaction(t => {
      return t
        .get(documentRef)
        .then(doc => {
          const log: IRoomLog = { authorUid: userProfile.uid, timestamp: Date.now(), type: Log.NEW_PLAYER };
          const logs = [...doc.data().logs, log];
          const player: IPlayerProfile = {
            displayName: userProfile.displayName,
            email: userProfile.email,
            photoURL: userProfile.photoURL,
            uid: userProfile.uid,
          };
          const players = { ...doc.data().players, [userProfile.uid]: player };
          const playersUid = [...doc.data().playersUid, userProfile.uid];
          return t.update(documentRef, { logs, players, playersUid });
        })
        .catch((err: any) => {
          // TODO: add toast message
          // TRANSACTION_FAILURE action dispatched
          console.log('Transaction failure:', err);
        });
    });
  }

  /**
   * Effects
   */
  useEffect(() => onChangeSetLocationMatch());

  useEffect(() => {
    onEnterTheRoomAddUserToPlayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRoomUid, selectedRoomData?.createdAt, userProfile.uid]);

  useEffect(() => {
    return () => onUnmountSetSelectedRoomToNull();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onChangeSetSelectedChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRoomData?.chatUid]);

  return (
    <React.Fragment>
      {selectedRoomUid &&
        [selectedRoomUid].map(uid => (
          <DiceServiceContextC key={uid as string}>
            <RoomView />
          </DiceServiceContextC>
        ))}
    </React.Fragment>
  );
}
