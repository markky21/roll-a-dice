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


    if (selectedRoomData?.maxPlayers <= selectedRoomData.players.length) {
      // TODO toast message
      return;
    }
    if (!selectedRoomData?.players || !userProfile.uid || selectedRoomData.gameMaster.uid === userProfile.uid) return;
    if (selectedRoomData.players.indexOf(userProfile.uid) !== -1) return;

    debugger;
    const documentRef = firestore.doc(`${FirestoreCollection.ROOMS}/${selectedRoomUid}`);
    firestore.runTransaction((t: any) => {
      return t
        .get(documentRef)
        .then((doc: any) => {
          const players = [...doc.data().players, userProfile.uid];
          return t.update(documentRef, { players });
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
