import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import { IRoom } from '../models/rooms.model';

const styles = (theme: Theme) =>
  createStyles({
    cards: {
      maxWidth: 936,
      width: '100%',
    },
    media: {
      height: 140,
    },
  });

interface RoomCardProps extends WithStyles<typeof styles> {
  room: IRoom;
}

function RoomCardC(props: RoomCardProps) {
  const { classes, room } = props;

  return (
    <Card className={classes.cards}>
      <CardMedia className={classes.media} image="/assets/images/fantasy-wallpapers.jpg" title="Room image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {room.roomName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {room.description}
        </Typography>
        <p>
          <Typography variant="caption" color="textSecondary" component="span">
            Room Game Master:
          </Typography>
          <br />
          <Typography variant="subtitle1" color="textSecondary" component="span">
            {room.gameMaster.displayName}
          </Typography>
        </p>
      </CardContent>
    </Card>
  );
}

export const RoomCard = withStyles(styles)(RoomCardC);
