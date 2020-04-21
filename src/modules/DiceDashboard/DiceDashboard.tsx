import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Collapse, Grow } from '@material-ui/core';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DiceDashboardForm } from './components/DiceDashboardForm';
import { DiceDashboardResult } from './components/DiceDashboardResult';
import { DiceServiceContext } from '../../contexts/DiceService.context';
import { IDiceThrow } from '../../models/dice.model';
import { IRoom } from '../../models/rooms.model';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: '#f4f4f2ef',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: theme.spacing(18),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    clickable: {
      cursor: 'pointer',
    },
  });

export interface DiceDashboardProps extends WithStyles<typeof styles> {
  visible?: boolean;
  room?: IRoom;
}

function DiceDashboardC(props: DiceDashboardProps) {
  const { classes, visible = true, room } = props;

  const destroyed$ = new Subject();

  const diceService = useContext(DiceServiceContext);
  const [throwResult, setThrowResult] = useState<IDiceThrow>(null);

  useEffect(() => {
    diceService?.diceThrowDelayedWhen$.pipe(takeUntil(destroyed$)).subscribe(result => setThrowResult(result));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!diceService]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => destroyed$.next(), []);

  return (
    <Grow in={visible}>
      <Card className={clsx(classes.root, !!throwResult && classes.clickable)} onClick={() => setThrowResult(null)}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Collapse in={!throwResult}>
              <DiceDashboardForm diceType={room?.diceType} />
            </Collapse>

            <Collapse in={!!throwResult}>
              <DiceDashboardResult throwResult={throwResult} />
            </Collapse>
          </CardContent>
        </div>
        {room?.gameMasterAvatar && (
          <CardMedia className={classes.cover} image={room?.gameMasterAvatar} title="Bot avatar" />
        )}
      </Card>
    </Grow>
  );
}

export const DiceDashboard = withStyles(styles)(DiceDashboardC);
