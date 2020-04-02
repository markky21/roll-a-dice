import React from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import { profileSelector } from '../../store/selectors/profile.selectors';
import { userChatsQuery } from '../../queries/chat.query';
import { userChatsSelector } from '../../store/selectors/chats.selectors';

const styles = createStyles({});

export interface ChatProps extends WithStyles<typeof styles> {}

function ChatC(props: ChatProps) {
  const profile = useSelector(profileSelector);
  useFirestoreConnect([userChatsQuery(profile.uid || '')]);

  const userChats = useSelector(userChatsSelector);
  console.log({userChats});

  return <div>Chat hanloo</div>;
}

export const Chat = withStyles(styles)(ChatC);
