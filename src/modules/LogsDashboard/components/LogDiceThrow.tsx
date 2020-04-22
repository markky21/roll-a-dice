import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { IRoomLog } from '../../../models/rooms.model';
import { diceUtils } from '../../../utils/dice.utils';

const styles = (theme: Theme) => createStyles({});

export interface LogDiceThrowProps extends WithStyles<typeof styles> {
  log: IRoomLog;
}

function LogDiceThrowC(props: LogDiceThrowProps) {
  const { log } = props;

  const resultSorted = diceUtils.sortObjectWithDiceKey(log.payload?.result || []);
  return (
    <Grid container spacing={0}>
      <Grid item xs={6}>
        <Typography component={'span'} variant={'caption'} color={'textSecondary'}>
          log type:
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography component={'span'} variant={'overline'} color={'secondary'}>
          {log.type}
        </Typography>
      </Grid>

      {Object.keys(resultSorted).map(diceKey => (
        <React.Fragment key={diceKey}>
          <Grid item xs={3}>
            <Typography component={'span'} variant={'caption'} color={'textSecondary'}>
              {diceKey}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography component={'span'} variant={'body1'} color={'secondary'}>
              {resultSorted[diceKey] && resultSorted[diceKey].join(', ')}
            </Typography>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
}

export const LogDiceThrow = React.memo(withStyles(styles)(LogDiceThrowC));
