import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Collapse, Grow } from '@material-ui/core';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import { DiceDashboardForm } from './components/DiceDashboardForm';
import { firestoreSelectors } from '../../store/firebase/firestore.selectors';
import { DiceDashboardResult } from './components/DiceDashboardResult';
import { DiceService } from '../../services/dice.service';
import { useFirestore } from 'react-redux-firebase';
import { IDiceThrowResult } from '../../models/dice.model';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: '#f4f4f280',
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
  });

export interface DiceDashboardProps extends WithStyles<typeof styles> {
  visible?: boolean;
}

function DiceDashboardC(props: DiceDashboardProps) {
  const { classes, visible = true } = props;

  const firestore = useFirestore();
  const roomData = useSelector(firestoreSelectors.selectedRoom);

  const diceService = DiceService.getInstance(firestore);
  const [throwResult, setThrowResult] = useState<IDiceThrowResult | null>(null);

  useEffect(() => {
    diceService.diceThrowResult$.subscribe(result => setThrowResult(result));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grow in={!!roomData && visible}>
      <Card className={classes.root} onClick={() => setThrowResult(null)}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Collapse in={!throwResult}>
              <DiceDashboardForm diceType={roomData?.diceType} />
            </Collapse>
            <Collapse in={!!throwResult}>
              <DiceDashboardResult throwResult={throwResult}/>
            </Collapse>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={`${process.env.PUBLIC_URL}/assets/images/avatar-1.jpg`}
          title="Bot avatar"
        />
      </Card>
    </Grow>
  );
}

export const DiceDashboard = withStyles(styles)(DiceDashboardC);