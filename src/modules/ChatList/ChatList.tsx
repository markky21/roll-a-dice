import React, { useEffect } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Dictionary } from 'react-redux-firebase';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

import { IChat } from '../../models/chats.model';
import { ChatListElements } from './components/ChatListElements';
import { chatsActions } from '../../store/chats/chats.actions';
import { chatsSelectors } from '../../store/chats/chats.selectors';
import { firestoreSelectors } from '../../store/firebase/firestore.selectors';

export enum ChatListType {
  EMBEDDED = 'EMBEDDED',
  CARD = 'CARD',
}

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
      margin: '16px 16px',
    },
  });

export interface ChatListProps extends WithStyles<typeof styles> {
  showSearchBar?: boolean;
  viewType?: ChatListType;
}

function ChatListC(props: ChatListProps) {
  const { classes, showSearchBar = true, viewType = ChatListType.CARD } = props;
  const userChats: Dictionary<IChat> = useSelector(firestoreSelectors.userChats) || {};
  const selectedChat: string | null = useSelector(chatsSelectors.selectedChat);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(chatsActions.setSelectedChat(null));
    };
  }, []);

  const onChatClick = (chatId: string) => {
    dispatch(chatsActions.setSelectedChat(chatId));
  };

  return viewType === ChatListType.CARD ? (
    <Paper className={classes.paper}>
      {showSearchBar && (
        <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
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
      )}
      <div className={classes.contentWrapper}>
        <ChatListElements chats={userChats} onChatClick={onChatClick} selectedChat={selectedChat} />
      </div>
    </Paper>
  ) : (
    <ChatListElements chats={userChats} onChatClick={onChatClick} selectedChat={selectedChat} />
  );
}

export const ChatList = withStyles(styles)(ChatListC);
