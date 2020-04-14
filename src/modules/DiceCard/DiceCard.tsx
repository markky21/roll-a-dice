import React, { useEffect, useRef, useState } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import { diceDefaultConfig } from '../../config/dice.config';
import { DiceService } from '../../services/dice.service';
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
    },
  });

interface DiceCardProps extends WithStyles<typeof styles> {}

function DiceCardC(props: DiceCardProps) {
  const { classes } = props;

  const canvasRef = React.useRef(null);
  const diceContainerEl = useRef(null);

  const [diceInitialized, setDiceInitialized] = useState(false);
  const firestore = useFirestore();
  const profile = useSelector(firebaseSelectors.userProfile);
  const roomUid = useSelector(roomsSelectors.selectedRoomUid);

  const diceService = DiceService.getInstance(firestore);
  const canvasWidth: number = (canvasRef.current && (canvasRef.current as any).getBoundingClientRect().width) || 0;

  useEffect(() => {
    diceService.profile = profile;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  useEffect(() => {
    diceService.roomUid = roomUid || null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomUid]);

  useEffect(() => {
    if (!diceInitialized && canvasWidth !== 0) {
      (window as any).dice_initialize(diceContainerEl.current, {
        ...diceDefaultConfig,
        diceThrow$: diceService.diceThrow$,
        diceThrowResult$: diceService.diceThrowResult$,
        diceBeforeThrow$: diceService.diceBeforeThrow$,
        diceSet$: diceService.handleDiceSetFormChanges$,
      });
      setDiceInitialized(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvasWidth]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => diceService.hostDestroyed(), []);

  return (
    <Paper elevation={3} className={classes.root}>
      <div id="diceCanvasContainer" ref={diceContainerEl} className={classes.diceCanvas}>
        <div ref={canvasRef} id="canvas" />
      </div>
    </Paper>
  );
}

export const DiceCard = withStyles(styles)(DiceCardC);
