import React from 'react';
import {Avatar, Grow, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core/styles';
import {Dictionary} from 'react-redux-firebase';

import {firstLettersJoined} from '../../../utils/text.utils';
import {timeStampToFormattedDate} from '../../../utils/date.utils';
import {IRoom} from '../../../models/rooms.model';

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

interface RoomListElementProps extends WithStyles<typeof styles> {
  rooms: Dictionary<IRoom>;
  selectedRoom: string | null;
  onRoomClick: (roomId: string) => void;
}

function RoomListElementC(props: RoomListElementProps) {
  const { classes, rooms, onRoomClick, selectedRoom } = props;

  const renderElement = () =>
    Object.keys(rooms).map((roomId, id) => (
      <Grow key={roomId} in timeout={1000 * id + 300}>
        <ListItem
          onClick={() => onRoomClick(roomId)}
          selected={roomId === selectedRoom}
          className={classes.item}
          button
          dense
          alignItems="flex-start"
        >
          <ListItemAvatar>
            <Avatar>{firstLettersJoined(rooms[roomId].name || 'No name')}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={rooms[roomId].name || 'No name'}
            secondary={timeStampToFormattedDate(rooms[roomId].createdAt)}
          />
        </ListItem>
      </Grow>
    ));

  return <List className={classes.root}>{renderElement()}</List>;
}

export const RoomListElements = withStyles(styles)(RoomListElementC);
