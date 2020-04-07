import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Dictionary, useFirestore } from 'react-redux-firebase';
import { Grid, Slide } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { ChatInputBox } from './components/ChatInputBox';
import { ChatMessage } from './components/ChatMessage';
import { chatsSelectors } from '../../store/chats/chats.selectors';
import { firebaseSelectors } from '../../store/firebase/firebase.selectors';
import { firestoreSelectors } from '../../store/firebase/firestore.selectors';
import { IChat, IChatMessage } from '../../models/chats.model';
import { IProfile } from '../../models/rooms.model';

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
      padding: '16px 16px',
      width: '100%',
    },
  });

interface ChatProps extends WithStyles<typeof styles> {
  height?: string;
}

function ChatC(props: ChatProps) {
  const { classes, height = '40vh' } = props;
  const firestore = useFirestore();
  const selectedChatUid: string | null = useSelector(chatsSelectors.selectedChat);
  const selectedChat: IChat | null = useSelector(firestoreSelectors.getChat(selectedChatUid)) || null;

  const userProfile: IProfile = useSelector(firebaseSelectors.profileSelector);
  const usersProfiles: Dictionary<IProfile> = useSelector(firestoreSelectors.usersProfiles);

  const onNewMessage = (message: string) => {
    let documentRef = firestore.doc(`chats/${selectedChatUid}`);

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
    <Slide direction="up" in>
      <Paper className={classes.paper}>
        <Grid container direction="column" justify="space-between" alignItems="flex-end">
          <div className={classes.contentWrapper}>
            <ChatMessage chat={selectedChat} usersProfiles={usersProfiles} listStyles={{ height }} />
          </div>
          <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
            <ChatInputBox onNewMessage={message => onNewMessage(message)} />
          </AppBar>
        </Grid>
      </Paper>
    </Slide>
  );
}

export const Chatter = withStyles(styles)(ChatC);
