import React, { useEffect, useRef } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Avatar, Badge, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { IChat } from '../../../models/chats.model';
import { Dictionary } from 'react-redux-firebase';
import { IProfile } from '../../../models/rooms.model';

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  })
)(Badge);

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
      const { displayName, photoURL, avatarUrl, connected } = usersProfiles[message.uid] || {};
      return (
        <React.Fragment key={message.createdAt}>
          {!!id && <Divider variant="inset" component="li" light={true} />}
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              {connected ? (
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant="dot"
                >
                  <Avatar alt={displayName} src={avatarUrl || photoURL} />
                </StyledBadge>
              ) : (
                <Avatar alt={displayName} src={avatarUrl || photoURL} />
              )}
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
