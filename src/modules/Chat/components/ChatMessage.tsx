import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Chat } from '../../../models/chats.model';
import { Dictionary } from 'react-redux-firebase';
import { Profile } from '../../../models/rooms.model';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  });

interface ChatListElementProps extends WithStyles<typeof styles> {
  chat: Chat | null;
  usersProfiles: Dictionary<Profile>;
}

function ChatListElementC(props: ChatListElementProps) {
  const { classes, chat, usersProfiles } = props;

  const renderElement = () =>
    chat?.messages.map((message, id) => {
      const { displayName, avatarUrl } = usersProfiles[message.uid] || {};
      return (
        <React.Fragment key={message.createdAt}>
          {!!id && <Divider variant="inset" component="li" light={true} />}
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={displayName} src={avatarUrl} />
            </ListItemAvatar>
            <ListItemText primary={displayName} secondary={message.content} />
          </ListItem>
        </React.Fragment>
      );
    });

  return <List className={classes.root}>{renderElement()}</List>;
}

export const ChatMessage = withStyles(styles)(ChatListElementC);
