import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import { Dictionary, useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import { IChat, IChatMessage } from '../../models/chats.model';
import { firestoreSelectors } from '../../store/firebase/firestore.selectors';
import { chatsSelectors } from '../../store/chats/chats.selectors';
import { ChatMessage } from './components/ChatMessage';
import { Profile } from '../../models/rooms.model';
import { ChatInputBox } from './components/ChatInputBox';
import { profileSelector } from '../../store/firebase/firebase.selectors';
import {Grid} from "@material-ui/core";

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

interface ChatProps extends WithStyles<typeof styles> {
  height?: string;
}

function ChatC(props: ChatProps) {
  const { classes, height = '40vh' } = props;
  const firestore = useFirestore();
  const selectedChat: string | null = useSelector(chatsSelectors.selectedChat);
  const chat: IChat | null = useSelector(firestoreSelectors.getChat(selectedChat)) || null;
  const userProfile: Profile = useSelector(profileSelector);
  const usersProfiles: Dictionary<Profile> = useSelector(firestoreSelectors.usersProfiles);

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
      {/*<Grid container direction="column" justify="space-between" alignItems="flex-end">*/}
        <div className={classes.contentWrapper}>
          <ChatMessage chat={chat} usersProfiles={usersProfiles} />
        </div>
        <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
          <ChatInputBox onNewMessage={message => onNewMessage(message)} />
        </AppBar>
      {/*</Grid>*/}
    </Paper>
  );
}

export const Chatter = withStyles(styles)(ChatC);
