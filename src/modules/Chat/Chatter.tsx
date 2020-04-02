import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import CreateIcon from '@material-ui/icons/Create';
import TextField from '@material-ui/core/TextField';
import { Chat } from '../../models/chats.model';
import { useSelector } from 'react-redux';
import { firestoreSelectors } from '../../store/firebase/firestore.selectors';
import { chatsSelectors } from '../../store/chats/chats.selectors';
import { ChatMessage } from './components/ChatMessage';
import { Dictionary, useFirestoreConnect } from 'react-redux-firebase';
import { profileQuery } from '../../queries/profile.query';
import { Profile } from '../../models/rooms.model';

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
    searchInput: {
      fontSize: theme.typography.fontSize,
    },
    block: {
      display: 'block',
    },
    addUser: {
      marginRight: theme.spacing(1),
    },
    contentWrapper: {
      margin: '16px 16px',
    },
  });

interface ChatProps extends WithStyles<typeof styles> {}

function ChatC(props: ChatProps) {
  const { classes } = props;
  const selectedChat: string | null = useSelector(chatsSelectors.selectedChat);
  const chat: Chat | null = useSelector(firestoreSelectors.getChat(selectedChat)) || null;
  const uniqProfilesUid: string[] = useSelector(chatsSelectors.uniqProfilesUid(selectedChat));
  const usersProfiles: Dictionary<Profile> = useSelector(firestoreSelectors.usersProfiles);
  useFirestoreConnect(profileQuery.getProfilesByUid(uniqProfilesUid));

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <ChatMessage chat={chat} usersProfiles={usersProfiles} />
      </div>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <CreateIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Type message.."
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Paper>
  );
}

export const Chatter = withStyles(styles)(ChatC);
