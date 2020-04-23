import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import { firstLettersJoined } from '../../../utils/text.utils';
import { dateUtils } from '../../../utils/date.utils';
import { IRoom } from '../../../models/rooms.model';
import { equal } from '../../../utils/object.utils';

const styles = (theme: Theme) =>
  createStyles({
    item: {
      cursor: 'pointer',
    },
  });

interface RoomListElementProps extends WithStyles<typeof styles> {
  roomId: string;
  room: IRoom;
  selectedRoom: string | null;
  onRoomClick: (roomId: string) => void;
}

function RoomListElementC(props: RoomListElementProps) {
  const { classes, room, roomId, onRoomClick, selectedRoom } = props;

  return (
    <ListItem
      onClick={() => onRoomClick(roomId)}
      selected={roomId === selectedRoom}
      className={classes.item}
      button
      dense
      alignItems="flex-start"
    >
      <ListItemAvatar>
        <Avatar>{firstLettersJoined(room.roomName || 'No name')}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={room.roomName || 'No name'}
        secondary={dateUtils.timeStampToFormattedDate(room.createdAt)}
      />
    </ListItem>
  );
}

export const RoomListElement = React.memo(
  withStyles(styles)(RoomListElementC),
  (prev, next) => equal(prev.room, next.room) && prev.selectedRoom === next.selectedRoom
);
