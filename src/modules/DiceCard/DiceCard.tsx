import clsx from 'clsx';
import React, { Dispatch, MutableRefObject, SetStateAction, useContext, useEffect, useRef, useState } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Grow, Paper } from '@material-ui/core';
import { interval, Subject } from 'rxjs';
import { delay, filter, map, takeUntil } from 'rxjs/operators';

import { diceDefaultConfig } from '../../config/dice.config';
import { DiceServiceContext } from '../../contexts/DiceService.context';
import { dice_initialize } from '../DiceVisualization/dice-main';

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

interface DiceCardProps extends WithStyles<typeof styles> {
  visible?: boolean;
}

function setStateWhenCanvasHasDimensions(ref: MutableRefObject<any>, setState: Dispatch<SetStateAction<any>>) {
  const takeUntil$ = new Subject();
  interval(300)
    .pipe(
      map(() => (ref?.current as HTMLElement)?.getBoundingClientRect()),
      filter(elementRect => !(elementRect?.width && elementRect?.height)),
      delay(300),
      takeUntil(takeUntil$)
    )
    .subscribe(() => {
      takeUntil$.next();
      setState(true);
    });
}

function DiceCardC(props: DiceCardProps) {
  const { classes, visible = true } = props;

  const canvasRef = React.useRef(null);
  const diceContainerEl = useRef(null);

  const [diceInitialized, setDiceInitialized] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const [canvasHasDimensions, setCanvasHasDimensions] = useState(false);
  const diceService = useContext(DiceServiceContext);

  useEffect(() => setStateWhenCanvasHasDimensions(canvasRef, setCanvasHasDimensions), []);

  useEffect(() => {
    if (!!diceService && !diceInitialized && canvasHasDimensions) {
      const resizeSensor = dice_initialize(diceContainerEl.current, {
        ...diceDefaultConfig,
        diceThrow$: diceService.diceThrow$,
        diceBeforeThrow$: diceService.diceBeforeThrow$,
        diceAfterThrow$: diceService.diceAfterThrow$,
        requestNewThrow$: diceService.requestNewThrow$,
      });
      setDiceInitialized(true);

      return () => resizeSensor.detach();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvasHasDimensions, !!diceService]);

  const onMouseDown = (isDown: boolean): void => {
    setMouseDown(isDown);
  };

  return (
    <Grow in={visible}>
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
    </Grow>
  );
}

export const DiceCard = withStyles(styles)(DiceCardC);
