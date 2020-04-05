import React, { useEffect, useRef } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { IChat } from '../../../models/chats.model';
import { Dictionary } from 'react-redux-firebase';
import { IProfile } from '../../../models/rooms.model';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      overflowY: 'scroll',
    },
    inline: {
      display: 'inline',
    },
  });

interface ChatListElementProps extends WithStyles<typeof styles> {
  chat: IChat | null;
  usersProfiles: Dictionary<IProfile>;
  listStyles?: Object;
}

function ChatListElementC(props: ChatListElementProps) {
  const { classes, chat, usersProfiles, listStyles } = props;

  const listRef = useRef(null);

  useEffect(() => {
    if (listRef && listRef.current) {
      (listRef.current as any).scrollTop = (listRef.current as any).scrollHeight;
    }
  });

  if (listRef && listRef.current) {
    (listRef.current as any).scrollTop = (listRef.current as any).scrollHeight;
  }

  const renderElement = () => {
    if (!chat || !chat.messages.length) return '';

    return chat?.messages.map((message, id) => {
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
  };

  return (
    <List ref={listRef} style={listStyles} className={classes.root}>
      {renderElement()}
    </List>
  );
}

export const ChatMessage = withStyles(styles)(ChatListElementC);
