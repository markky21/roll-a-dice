import React, { useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import { chatsActions } from '../../../store/chats/chats.actions';
import { Chatter } from '../../../modules/Chatter/Chatter';
import { DiceCard } from '../../../containers/DiceCard';
import { locationActions } from '../../../store/location/location.actions';
import { LocationMatch } from '../../../store/location/location.model';
import { locationSelectors } from '../../../store/location/location.selectors';
import { roomsActions } from '../../../store/rooms/rooms.actions';

const styles = (theme: Theme) => ({
  cards: {
    position: 'relative' as 'relative',
    margin: '-48px -32px',
    height: '100%',
    //
  },
  diceWrapper: {},
  media: {
    height: 140,
  },
  chatter: {
    zIndex: 100000,
    position: 'fixed' as 'fixed',
    bottom: '20px',
    right: '20px',
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
    roomId && dispatch(chatsActions.setSelectedChat(roomId));
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
      <section className={classes.cards}>
        <DiceCard />
      </section>
      <section className={classes.chatter}>
        <Chatter />
      </section>
    </React.Fragment>
  );
}
