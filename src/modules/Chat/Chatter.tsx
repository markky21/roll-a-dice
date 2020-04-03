import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import { Dictionary, useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import { IChat, IChatMessage } from '../../models/chats.model';
import { firestoreSelectors } from '../../store/firebase/firestore.selectors';
import { chatsSelectors } from '../../store/chats/chats.selectors';
import { ChatMessage } from './components/ChatMessage';
import { profileQuery } from '../../queries/profile.query';
import { Profile } from '../../models/rooms.model';
import { ChatInputBox } from './components/ChatInputBox';
import { profileSelector } from '../../store/firebase/firebase.selectors';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      maxWidth: 936,
      margin: 'auto',
      overflow: 'hidden',
    },
    searchBar: {
      borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    },

    contentWrapper: {
      margin: '16px 16px',
    },
  });

interface ChatProps extends WithStyles<typeof styles> {}

function ChatC(props: ChatProps) {
  const { classes } = props;
  const firestore = useFirestore();
  const selectedChat: string | null = useSelector(chatsSelectors.selectedChat);
  const chat: IChat | null = useSelector(firestoreSelectors.getChat(selectedChat)) || null;
  const uniqProfilesUid: string[] = useSelector(chatsSelectors.uniqProfilesUid(selectedChat));
  const userProfile: Profile = useSelector(profileSelector);
  const usersProfiles: Dictionary<Profile> = useSelector(firestoreSelectors.usersProfiles);
  useFirestoreConnect(profileQuery.getProfilesByUid(uniqProfilesUid));

  const onNewMessage = (message: string) => {
    let documentRef = firestore.doc(`chats/${selectedChat}`);

    const newMessage: IChatMessage = {
      createdAt: Date.now().toString(),
      content: message,
      uid: userProfile.uid,
    };

    firestore.runTransaction((t: any) => {
      return t
        .get(documentRef)
        .then((doc: any) => {
          const messages = [...doc.data().messages, newMessage];
          return t.update(documentRef, { messages });
        })
        .catch((err: any) => {
          // TODO: add toast message
          // TRANSACTION_FAILURE action dispatched
          console.log('Transaction failure:', err);
        });
    });
  };

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <ChatMessage chat={chat} usersProfiles={usersProfiles} />
      </div>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <ChatInputBox onNewMessage={message => onNewMessage(message)} />
      </AppBar>
    </Paper>
  );
}

export const Chatter = withStyles(styles)(ChatC);
