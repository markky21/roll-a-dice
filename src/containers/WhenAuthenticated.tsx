import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

import { profileSelector } from '../store/firebase/firebase.selectors';
import { userChatsQuery } from '../queries/chat.query';
import { chatsSelectors } from '../store/chats/chats.selectors';
import { profileQuery } from '../queries/profile.query';

interface CoreProps {}

export function WhenAuthenticated(props: CoreProps) {
  const profile = useSelector(profileSelector);
  const selectedChat: string | null = useSelector(chatsSelectors.selectedChat);
  const uniqProfilesUid: string[] = useSelector(chatsSelectors.uniqProfilesUid(selectedChat));

  useFirestoreConnect(profileQuery.getProfilesByUid(uniqProfilesUid.length ? uniqProfilesUid : ['']));
  useFirestoreConnect([userChatsQuery(profile.uid || '')]);
  return <React.Fragment />;
}
