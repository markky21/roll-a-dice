import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFirebase, useFirebaseConnect, useFirestore, useFirestoreConnect } from 'react-redux-firebase';

import { chatsQuery } from '../queries/chat.query';
import { firebaseSelectors } from '../store/firebase/firebase.selectors';
import { profileQuery } from '../queries/profile.query';
import { roomsQuery } from '../queries/rooms.query';
import { roomsSelectors } from '../store/rooms/rooms.selectors';
import { mainSelectors } from '../store/main.selectors';
import { FirestoreCollection } from '../models/firestore.model';
import { chatsSelectors } from '../store/chats/chats.selectors';
import { chatsActions } from '../store/chats/chats.actions';
import { firestoreSelectors } from '../store/firebase/firestore.selectors';

export function WhenAuthenticated() {
  const firestore = useFirestore();
  const firebase = useFirebase();

  const profile = useSelector(firebaseSelectors.userProfile);
  const selectedRoomUid = useSelector(roomsSelectors.selectedRoomUid);
  const uniqProfilesUid: string[] = [...useSelector(mainSelectors.getAllNeededPlayersUid)];
  const userConnected = useSelector(firebaseSelectors.userConnected);
  const selectedChat = useSelector(chatsSelectors.selectedChat);
  const userChats = useSelector(firestoreSelectors.userChats);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (!selectedChat && Object.keys(userChats || {}).length) {
      dispatch(chatsActions.setSelectedChat(Object.keys(userChats as any)[0]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!selectedChat, Object.keys(userChats || {}).length === 0]);

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
