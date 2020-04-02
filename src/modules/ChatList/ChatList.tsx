import React from 'react';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import { Dictionary, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

import { profileSelector } from '../../store/selectors/profile.selectors';
import { userChatsQuery } from '../../queries/chat.query';
import { userChatsSelector } from '../../store/selectors/chats.selectors';
import { ChatListElements } from './components/ChatListElements';
import { Chat } from '../../models/chats.model';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      maxWidth: 936,
      margin: 'auto',
      overflow: 'hidden',
    },
    searchBar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
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
      margin: '40px 16px',
    },
  });

export interface ChatListProps extends WithStyles<typeof styles> {}

function ChatListC(props: ChatListProps) {
  const { classes } = props;
  const profile = useSelector(profileSelector);
  const userChats: Dictionary<Chat> = useSelector(userChatsSelector) || {};
  useFirestoreConnect([userChatsQuery(profile.uid || '')]);

  let chatSelected: string | null = null;

  const onChatClick = (chatId: string) => {
    chatSelected = chatId;
    console.log({ chatId });
  };

  return (
    <Paper className={classes.paper}>
      <AppBar
        className={classes.searchBar}
        position="static"
        color="default"
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by room name or players"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <ChatListElements chats={userChats} onChatClick={onChatClick} />
      </div>
    </Paper>
  );
}

export const ChatList = withStyles(styles)(ChatListC);
