import clsx from 'clsx';
import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import { Chatter } from '../../../../modules/Chatter';
import { DiceCard } from '../../../../modules/DiceCard/DiceCard';
import { DiceDashboard } from '../../../../modules/DiceDashboard/DiceDashbard';
import { Players } from '../../../../modules/Players/Players';
import { RoomSpeedDialWrapper } from './RoomSpeedDial';
import { roomsSelectors } from '../../../../store/rooms/rooms.selectors';
import { mainSelectors } from '../../../../store/main.selectors';
import { firestoreSelectors } from '../../../../store/firebase/firestore.selectors';

// TODO: update grid heights when no profiles
const styles = (theme: Theme) => ({
  root: {
    position: 'relative' as 'relative',
    margin: theme.spacing(-6, -4),
    height: `calc(100% + ${theme.spacing(12)}px)`,
  },
  diceWrapper: {},
  chatter: {
    zIndex: 100,
    position: 'fixed' as 'fixed',
    bottom: theme.spacing(4),
    // bottom: theme.spacing(26), // TODO: update height or grid structure
    right: theme.spacing(2),
    transition: 'bottom 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  },
  chatterLower: {
    bottom: theme.spacing(4),
  },
  speedDial: {
    position: 'absolute' as 'absolute',
    bottom: theme.spacing(25),
    left: theme.spacing(3),
    zIndex: 10,
    transition: 'bottom 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  },
  speedDialLower: {
    bottom: theme.spacing(3),
  },
  cssGrid: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr auto',
    rowGap: `${theme.spacing(2)}px`,
    columnGap: `${theme.spacing(2)}px`,
    padding: theme.spacing(2, 2, 0, 2),
  },
  cssItem1: {
    gridColumn: 1,
    gridRow: 1,
  },
  cssItem2: {
    gridColumn: 1,
    gridRow: 2,
  },
  diceDashboard: {
    position: 'absolute' as 'absolute',
    zIndex: 1000,
    top: theme.spacing(3),
    left: theme.spacing(3),
  },
});

const useStyles = makeStyles(styles);

export function RoomView() {
  const classes = useStyles();

  const playersOpened = useSelector(roomsSelectors.playersOpened);
  const chatOpened = useSelector(roomsSelectors.chatOpened);
  const diceRolling = useSelector(roomsSelectors.diceRolling);
  const selectedRoom = useSelector(firestoreSelectors.selectedRoom);

  const isUserARoomPlayerOrGameMaster = useSelector(mainSelectors.isUserARoomPlayerOrGameMaster);

  const diceCardFullHeight = !playersOpened || !selectedRoom ;

  return (
    <section className={classes.root}>
      <div className={clsx(classes.chatter, diceCardFullHeight && classes.chatterLower)}>
        <Chatter visbile={chatOpened && !diceRolling && isUserARoomPlayerOrGameMaster} />
      </div>

      <div className={classes.cssGrid}>
        <div className={classes.cssItem1}>
          <DiceCard />
        </div>
        <div className={classes.cssItem2}>
          <Players visible={!diceCardFullHeight} />
        </div>
      </div>

      <nav className={clsx(classes.speedDial, diceCardFullHeight && classes.speedDialLower)}>
        <RoomSpeedDialWrapper />
      </nav>

      <nav className={classes.diceDashboard}>
        <DiceDashboard visible={!diceRolling && !!selectedRoom && isUserARoomPlayerOrGameMaster} room={selectedRoom} />
      </nav>
    </section>
  );
}
