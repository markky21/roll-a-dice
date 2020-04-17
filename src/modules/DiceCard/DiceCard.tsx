import clsx from 'clsx';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import { diceDefaultConfig } from '../../config/dice.config';
import { DiceServiceContext } from '../../contexts/DiceService.context';

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
      cursor: 'grab',
    },
    grabbing: {
      cursor: 'grabbing',
    },
  });

interface DiceCardProps extends WithStyles<typeof styles> {}

function DiceCardC(props: DiceCardProps) {
  const { classes } = props;

  const canvasRef = React.useRef(null);
  const diceContainerEl = useRef(null);

  const [diceInitialized, setDiceInitialized] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const diceService = useContext(DiceServiceContext);
  const canvasWidth: number = (canvasRef.current && (canvasRef.current as any).getBoundingClientRect().width) || 0;

  useEffect(() => {
    if (!!diceService && !diceInitialized && canvasWidth !== 0) {
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
  }, [!!canvasWidth, !!diceService]);

  const onMouseDown = (isDown: boolean): void => {
    setMouseDown(isDown);
  };

  return (
    <Paper elevation={3} className={classes.root}>
      <div
        id="diceCanvasContainer"
        ref={diceContainerEl}
        className={clsx(classes.diceCanvas, mouseDown && classes.grabbing)}
        onMouseDown={() => onMouseDown(true)}
        onMouseUp={() => onMouseDown(false)}
      >
        <div ref={canvasRef} id="canvas" />
      </div>
    </Paper>
  );
}

export const DiceCard = withStyles(styles)(DiceCardC);
