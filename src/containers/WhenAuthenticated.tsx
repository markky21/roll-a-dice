import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

import { chatsQuery } from '../queries/chat.query';
import { firebaseSelectors } from '../store/firebase/firebase.selectors';
import { profileQuery } from '../queries/profile.query';
import { roomsQuery } from '../queries/rooms.query';
import { roomsSelectors } from '../store/rooms/rooms.selectors';
import { mainSelectors } from '../store/main.selectors';

interface CoreProps {}

export function WhenAuthenticated(props: CoreProps) {
  const profile = useSelector(firebaseSelectors.profileSelector);
  const uniqProfilesUid: string[] = [...useSelector(mainSelectors.getAllNeededPlayersUid)];
  const selectedRoom = useSelector(roomsSelectors.selectedRoom);

  useFirestoreConnect([
    /**
     * Get all profiles data listed in array (for chat and room)
     */
    profileQuery.getProfilesByUid(uniqProfilesUid.length ? uniqProfilesUid : ['']),
    /**
     * Get all profiles listed in chat messages
     */
    chatsQuery.getUserChats(profile.uid),
    /**
     * Get all rooms where user is MG
     */
    roomsQuery.getUserRoomsAsGameMaster(profile.uid || ''),
    /**
     * Get all rooms where user is Player
     */
    roomsQuery.getUserRoomsAsPlayer(profile.uid || ''),
    /**
     * Get selectedRoom by player
     */
    roomsQuery.getRoom(selectedRoom || ''),
  ]);
  return <React.Fragment />;
}
