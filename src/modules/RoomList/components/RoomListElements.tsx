import React from 'react';
import { Avatar, Divider, Grow, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Dictionary } from 'react-redux-firebase';

import { firstLettersJoined } from '../../../utils/text.utils';
import { dateUtils } from '../../../utils/date.utils';
import { IRoom } from '../../../models/rooms.model';

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
    divider: { backgroundColor: 'rgba(0, 0, 0, 0.12)' },
  });

interface RoomListElementProps extends WithStyles<typeof styles> {
  roomsAsGameMaster: Dictionary<IRoom>;
  roomsAsPlayer: Dictionary<IRoom>;
  selectedRoom: string | null;
  onRoomClick: (roomId: string) => void;
}

function RoomListElementC(props: RoomListElementProps) {
  const { classes, roomsAsGameMaster, roomsAsPlayer, onRoomClick, selectedRoom } = props;

  const renderElement = (rooms: Dictionary<IRoom>, timeout: number = 300) =>
    Object.keys(rooms).map((roomId, id) => (
      <Grow key={roomId} in timeout={1000 * id + timeout}>
        <ListItem
          onClick={() => onRoomClick(roomId)}
          selected={roomId === selectedRoom}
          className={classes.item}
          button
          dense
          alignItems="flex-start"
        >
          <ListItemAvatar>
            <Avatar>{firstLettersJoined(rooms[roomId].roomName || 'No name')}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={rooms[roomId].roomName || 'No name'}
            secondary={dateUtils.timeStampToFormattedDate(rooms[roomId].createdAt)}
          />
        </ListItem>
      </Grow>
    ));

  return (
    <List className={classes.root}>
      {renderElement(roomsAsGameMaster)}
      <Grow in={!!Object.keys(roomsAsGameMaster).length} timeout={1000 * Object.keys(roomsAsGameMaster).length + 300}>
        <Divider className={classes.divider} />
      </Grow>
      {renderElement(roomsAsPlayer, 1000 * Object.keys(roomsAsGameMaster).length + 300)}
    </List>
  );
}

export const RoomListElements = React.memo(withStyles(styles)(RoomListElementC));
