import React, { useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grow, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Dictionary } from 'react-redux-firebase';
import { firestoreSelectors } from '../../../store/firebase/firestore.selectors';
import { IRoom } from '../../../models/rooms.model';
import { locationActions } from '../../../store/location/location.actions';
import { LocationMatch } from '../../../store/location/location.model';
import { locationSelectors } from '../../../store/location/location.selectors';
import { RoomCreateInRoomList } from '../../../containers/RoomCreateInRoomList';
import { RoomList } from '../../../modules/RoomList/RoomList';
import { RouterPath } from '../../../models/paths';

const styles = (theme: Theme) => ({
  cards: {
    marginBottom: '16px',
    maxWidth: 936,
  },
  media: {
    height: 140,
  },
});

const useStyles = makeStyles(styles);

export interface RoomListProps {
  match: LocationMatch;
}

export function RoomListsC(props: RoomListProps) {
  const classes = useStyles();
  const { match } = props;

  const dispatch = useDispatch();
  const storeLocationMatch = useSelector(locationSelectors.match$);
  const userRoomsAsGameMaster: Dictionary<IRoom> = useSelector(firestoreSelectors.userRoomsAsGameMaster$) || {};
  const userRoomsAsPlayer: Dictionary<IRoom> = useSelector(firestoreSelectors.userRoomsAsPlayer$) || {};

  useEffect(() => {
    if (JSON.stringify(match) !== JSON.stringify(storeLocationMatch)) {
      dispatch(locationActions.matchChange(match));
    }
  });

  return (
    <React.Fragment>
      <section className={classes.cards}>
        <Grow in>
          <Card>
            <CardMedia
              className={classes.media}
              image={`${process.env.PUBLIC_URL}/assets/images/fantasy-wallpapers.jpg`}
              title="Fantasy RPG"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Enter to the new world
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Create a new game room to start a new adventure with your friends!
              </Typography>
            </CardContent>
            <CardActions>
              <NavLink to={RouterPath.ROOM_CREATE_PATH}>
                <Button variant="contained" color="primary">
                  Create new Room
                </Button>
              </NavLink>
            </CardActions>
          </Card>
        </Grow>
      </section>

      <section className={classes.cards}>
        <RoomList
          roomsAsGameMaster={userRoomsAsGameMaster}
          roomsAsPlayer={userRoomsAsPlayer}
          selectedRoom={null}
          showSearchBar
          label={'Search room by name'}
        />
      </section>

      <RoomCreateInRoomList />
    </React.Fragment>
  );
}
