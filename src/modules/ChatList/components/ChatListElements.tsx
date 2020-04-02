import React from 'react';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import { Chat } from '../../../models/chats.model';
import { timeStampToFormattedDate } from '../../../utils/date.utils';
import { firstLettersJoined } from '../../../utils/text.utils';
import { Dictionary } from 'react-redux-firebase';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  });

interface ChatListElementProps extends WithStyles<typeof styles> {
  chats: Dictionary<Chat>;
  onChatClick: (chatId: string) => void;
}

function ChatListElementC(props: ChatListElementProps) {
  const { classes, chats, onChatClick } = props;

  const renderElement = () =>
    Object.keys(chats).map(chatId => (
      <ListItem key={chatId} onClick={() => onChatClick(chatId)}>
        <ListItemAvatar>
          <Avatar>
            {firstLettersJoined(chats[chatId].gameName || 'No name')}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={chats[chatId].gameName || 'No name'}
          secondary={timeStampToFormattedDate(chats[chatId].createdAt)}
        />
      </ListItem>
    ));

  return <List className={classes.root}>{renderElement()}</List>;
}

export const ChatListElements = withStyles(styles)(ChatListElementC);
