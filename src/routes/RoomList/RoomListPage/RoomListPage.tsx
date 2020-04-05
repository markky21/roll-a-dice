import React, {useEffect} from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {Grow} from '@material-ui/core';

import {locationSelectors} from '../../../store/location/location.selectors';
import {locationActions} from '../../../store/location/location.actions';
import {LocationMatch} from '../../../store/location/location.model';
import {RoomList} from '../../../modules/RoomList/RoomList';
import {RoomCreate} from '../../../modules/RoomCreate/RoomCreate';

const styles = (theme: Theme) => ({
  cards: {
    marginBottom: '16px',
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
  const storeLocationMatch = useSelector(locationSelectors.match);

  useEffect(() => {
    if (JSON.stringify(match) !== JSON.stringify(storeLocationMatch)) {
      dispatch(locationActions.matchChange(match));
    }
  });

  return (
    <React.Fragment>
      <Grow in={true}>
        <section className={classes.cards}>
          <RoomList />
        </section>
      </Grow>
      <RoomCreate />
    </React.Fragment>
  );
}
