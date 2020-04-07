import React, { useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import { locationActions } from '../../../store/location/location.actions';
import { LocationMatch } from '../../../store/location/location.model';
import { locationSelectors } from '../../../store/location/location.selectors';
import { roomsActions } from '../../../store/rooms/rooms.actions';

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

export function RoomC(props: RoomListProps) {
  const classes = useStyles();

  const { match } = props;
  const dispatch = useDispatch();
  const storeLocationMatch = useSelector(locationSelectors.match);

  useEffect(() => {
    if (JSON.stringify(match) !== JSON.stringify(storeLocationMatch)) {
      dispatch(locationActions.matchChange(match));
    }
  });

  useEffect(() => {
    const roomId = (storeLocationMatch.params as any)['roomId'];
    roomId && dispatch(roomsActions.setSelectedRoom(roomId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(storeLocationMatch.params as any)['roomId']]);

  useEffect(() => {
    return () => {
      dispatch(roomsActions.setSelectedRoom(null));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <section className={classes.cards}>Henlooooo!!!</section>
    </React.Fragment>
  );
}
