import React, { useEffect, useRef } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import { DiceNav } from './components/DiceNav';
import { diceDefaultConfig } from '../../config/dice.config';
import { DiceService } from '../../services/dice.service';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { firebaseSelectors } from '../../store/firebase/firebase.selectors';
import { roomsSelectors } from '../../store/rooms/rooms.selectors';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: `calc(100% - ${theme.spacing(2)}px)`,
      position: 'relative' as 'relative',
    },
    diceCanvas: {
      width: '100%',
      height: '100%',
      // position: 'absolute', top: 0, left: 0
    },
    nav: {
      position: 'absolute' as 'absolute',
      top: theme.spacing(1),
      left: theme.spacing(1),
    },
  });

interface DiceCardProps extends WithStyles<typeof styles> {}

function DiceCardC(props: DiceCardProps) {
  const { classes } = props;

  const firestore = useFirestore();
  const profile = useSelector(firebaseSelectors.userProfile);
  const roomUid = useSelector(roomsSelectors.selectedRoomUid);

  const diceService = DiceService.getInstance(firestore);
  const diceContainerEl = useRef(null);

  useEffect(() => {
    diceService.profile = profile;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  useEffect(() => {
    diceService.roomUid = roomUid || null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomUid]);

  useEffect(() => {
    (window as any).dice_initialize(diceContainerEl.current, {
      ...diceDefaultConfig,
      diceThrow$: diceService.diceThrow$,
      diceThrowResult$: diceService.diceThrowResult$,
      diceBeforeThrow$: diceService.diceBeforeThrow$,
    });
    return () => diceService.hostDestroyed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Paper elevation={3} className={classes.root}>
      <div id="diceCanvasContainer" ref={diceContainerEl} className={classes.diceCanvas}>
        <div id="canvas" />
        <nav className={classes.nav}>
          <DiceNav />
        </nav>
      </div>
    </Paper>
  );
}

export const DiceCard = withStyles(styles)(DiceCardC);
