import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { IRoomLog } from '../../../models/rooms.model';

const styles = (theme: Theme) => createStyles({});

export interface LogNewPlayerProps extends WithStyles<typeof styles> {
  log: IRoomLog;
}

function LogNewPlayerC(props: LogNewPlayerProps) {
  const { log } = props;

  return (
    <React.Fragment>
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
      </Grid>
    </React.Fragment>
  );
}

export const LogNewPlayer = React.memo(withStyles(styles)(LogNewPlayerC));
