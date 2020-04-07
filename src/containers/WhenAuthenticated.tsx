import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

import { chatsQuery } from '../queries/chat.query';
import { chatsSelectors } from '../store/chats/chats.selectors';
import { firebaseSelectors } from '../store/firebase/firebase.selectors';
import { profileQuery } from '../queries/profile.query';
import { roomsQuery } from '../queries/rooms.query';
import { roomsSelectors } from '../store/rooms/rooms.selectors';
import { firestoreSelectors } from '../store/firebase/firestore.selectors';

interface CoreProps {}

export function WhenAuthenticated(props: CoreProps) {
  const profile = useSelector(firebaseSelectors.profileSelector);
  const selectedChat: string | null = useSelector(chatsSelectors.selectedChat);
  const uniqProfilesUid: string[] = useSelector(chatsSelectors.uniqProfilesUid(selectedChat));
  const selectedRoom = useSelector(roomsSelectors.selectedRoom);
  const allUserRoomsUid = useSelector(firestoreSelectors.allUserRoomsUid);

  useFirestoreConnect([
    profileQuery.getProfilesByUid(uniqProfilesUid.length ? uniqProfilesUid : ['']),
    chatsQuery.getUserChats(allUserRoomsUid),
    roomsQuery.getUserRoomsAsGameMaster(profile.uid || ''),
    roomsQuery.getRoom(selectedRoom || ''),
  ]);
  return <React.Fragment />;
}
