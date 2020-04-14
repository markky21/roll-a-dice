import React from 'react';
import { Avatar, Grow, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Dictionary } from 'react-redux-firebase';

import { firstLettersJoined } from '../../../utils/text.utils';
import { IChat } from '../../../models/chats.model';
import { timeStampToFormattedDate } from '../../../utils/date.utils';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      height: '20vh',
      overflowY: 'scroll',
    },
    item: {
      cursor: 'pointer',
    },
  });

interface ChatListElementProps extends WithStyles<typeof styles> {
  chats: Dictionary<IChat>;
  selectedChat: string | null;
  onChatClick: (chatId: string) => void;
}

function ChatListElementC(props: ChatListElementProps) {
  const { classes, chats, onChatClick, selectedChat } = props;

  const renderElement = () =>
    Object.keys(chats).map((chatId, id) => (
      <Grow key={chatId} in timeout={1000 * id + 300}>
        <ListItem
          onClick={() => onChatClick(chatId)}
          selected={chatId === selectedChat}
          className={classes.item}
          button
          dense
          alignItems="flex-start"
        >
          <ListItemAvatar>
            <Avatar>{firstLettersJoined(chats[chatId].roomName || 'No name')}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={chats[chatId].roomName || 'No name'}
            secondary={timeStampToFormattedDate(chats[chatId].createdAt)}
          />
        </ListItem>
      </Grow>
    ));

  return <List className={classes.root}>{renderElement()}</List>;
}

export const ChatListElements =  React.memo(withStyles(styles)(ChatListElementC));
