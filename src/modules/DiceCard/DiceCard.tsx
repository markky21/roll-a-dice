import React, { useEffect, useRef } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { DiceNav } from './components/DiceNav';
import { ReplaySubject, Subject } from 'rxjs';
import { diceDefaultConfig } from '../../config/dice.config';

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

  const diceContainerEl = useRef(null);

  const diceThrow$ = new Subject();
  const diceThrowResult$ = new ReplaySubject(1);

  setInterval(() => {
    diceThrow$.next({
      diceSet: 'd4+d6+d8+d10+d12+d20+d100',
      throwRequestResult: [1, 2, 3, 4],
    });
  }, 10000);

  diceThrowResult$.subscribe(e => {
    console.log(e);
  });
  useEffect(() => {
    (window as any).dice_initialize(diceContainerEl.current, {
      ...diceDefaultConfig,
      diceThrow$,
      diceThrowResult$,
    });
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
