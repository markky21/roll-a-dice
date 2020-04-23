import clsx from 'clsx';
import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import { Chatter } from '../../../../modules/Chatter';
import { DiceCard } from '../../../../modules/DiceCard/DiceCard';
import { DiceDashboard } from '../../../../modules/DiceDashboard/DiceDashboard';
import { firestoreSelectors } from '../../../../store/firebase/firestore.selectors';
import { LogsDashboard } from '../../../../modules/LogsDashboard/LogsDashboard';
import { mainSelectors } from '../../../../store/main.selectors';
import { Players } from '../../../../modules/Players/Players';
import { RoomSpeedDialWrapper } from './RoomSpeedDial';
import { roomsSelectors } from '../../../../store/rooms/rooms.selectors';

const styles = (theme: Theme) => ({
  root: {
    position: 'relative' as 'relative',
    margin: theme.spacing(-6, -4),
    height: `calc(100vh - ${theme.spacing(10)}px)`,
    padding: theme.spacing(1, 1, 0, 1),
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gridTemplateRows: '1fr auto auto',
    columnGap: theme.spacing(2) + 'px',
    rowGap: theme.spacing(2) + 'px',
    width: '100%',
    height: '100%',
  },
  gridItemLogs: {
    position: 'relative' as 'relative',
    gridColumn: '2',
    gridRow: '1',
  },
  gridItemChatter: {
    position: 'relative' as 'relative',
    gridColumn: '2',
    gridRow: '2 / span 2',
  },
  gridItemDiceCard: {
    position: 'relative' as 'relative',
    gridColumn: '1 / span 2',
    gridRow: '1 / span 2',
  },
  gridItemPlayers: {
    position: 'relative' as 'relative',
    gridColumn: '1',
    gridRow: '3',
  },
  speedDial: {
    position: 'absolute' as 'absolute',
    bottom: theme.spacing(1),
    left: theme.spacing(1),
    zIndex: 10,
  },
  diceDashboard: {
    position: 'absolute' as 'absolute',
    zIndex: 1000,
    top: theme.spacing(1),
    left: theme.spacing(1),
  },

  maxHeight: {
    maxHeight: '3000px',
    transition: 'max-height 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  },
  noHeight: {
    maxHeight: 0,
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

  const diceCardFullHeight = !playersOpened || !selectedRoom;

  return (
    <section className={classes.root}>
      <div className={classes.mainGrid}>
        <div className={classes.gridItemLogs}>
          <LogsDashboard visible={!diceRolling && !!selectedRoom} />
        </div>

        <div className={classes.gridItemDiceCard}>
          <DiceCard />

          <nav className={classes.diceDashboard}>
            <DiceDashboard
              visible={!diceRolling && !!selectedRoom && isUserARoomPlayerOrGameMaster}
              room={selectedRoom}
            />
          </nav>

          <nav className={classes.speedDial}>
            <RoomSpeedDialWrapper />
          </nav>
        </div>

        <div className={classes.gridItemChatter}>
          <Chatter visible={chatOpened && !diceRolling && isUserARoomPlayerOrGameMaster} />
        </div>

        <div className={classes.gridItemPlayers}>
          <div className={clsx(classes.maxHeight, diceCardFullHeight && classes.noHeight)}>
            <Players visible={!diceCardFullHeight} />
          </div>
        </div>
      </div>
    </section>
  );
}
