import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFirebase, useFirebaseConnect, useFirestore, useFirestoreConnect } from 'react-redux-firebase';

import { chatsQuery } from '../queries/chat.query';
import { firebaseSelectors } from '../store/firebase/firebase.selectors';
import { profileQuery } from '../queries/profile.query';
import { roomsQuery } from '../queries/rooms.query';
import { roomsSelectors } from '../store/rooms/rooms.selectors';
import { mainSelectors } from '../store/main.selectors';
import { FirestoreCollection } from '../models/firestore.model';

export function WhenAuthenticated() {
  const firestore = useFirestore();
  const firebase = useFirebase();

  const profile = useSelector(firebaseSelectors.userProfile);
  const selectedRoomUid = useSelector(roomsSelectors.selectedRoomUid);
  const uniqProfilesUid: string[] = [...useSelector(mainSelectors.getAllNeededPlayersUid)];
  const userConnected = useSelector(firebaseSelectors.userConnected);

  function updateUserStatus(connected: boolean): void {
    const docUserRef = firestore.doc(`${FirestoreCollection.USERS}/${profile.uid}`);
    docUserRef.update({ connected });
  }

  function updateUserStatusOnDisconnect(): void {
    const docUserRef = firebase.ref(`${FirestoreCollection.USERS}/${profile.uid}`);
    docUserRef.onDisconnect().update({ connected: false });
  }

  useEffect(() => {
    if (userConnected !== true || !profile.uid) {
      return;
    }
    updateUserStatus(userConnected);
    updateUserStatusOnDisconnect();
    return () => {
      updateUserStatus(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userConnected, profile.uid]);

  useFirebaseConnect([profileQuery.connected]);

  useFirestoreConnect([
    /**
     * Get all profiles data listed in array (for chat and room)
     */
    profileQuery.getProfilesByUid(uniqProfilesUid.length ? uniqProfilesUid : ['unknown']),
    /**
     * Get all profiles listed in chat messages
     */
    chatsQuery.getUserChats(profile.uid),
    /**
     * Get all rooms where user is MG
     */
    roomsQuery.getUserRoomsAsGameMaster(profile.uid || 'unknown'),
    /**
     * Get all rooms where user is Player
     */
    roomsQuery.getUserRoomsAsPlayer(profile.uid || 'unknown'),
    /**
     * Get selectedRoom by player
     */
    roomsQuery.getRoom(selectedRoomUid || 'unknown'),
  ]);
  return <React.Fragment />;
}
