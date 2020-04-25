import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Grid, Grow, Paper, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { firebaseSelectors } from '../../store/firebase/firebase.selectors';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      padding: theme.spacing(2, 4),
      height: '100%',
    },
    label: { textAlign: 'center' },
    value: {
      lineHeight: '70%',
      textAlign: 'center',
    },
  });

interface AppStatsProps extends WithStyles<typeof styles> {}

function AppStatsC(props: AppStatsProps) {
  const { classes } = props;

  const appStats = useSelector(firebaseSelectors.applicationStats$);
  const statsView = [
    { label: 'Players:', value: appStats?.players || 0 },
    { label: 'Rooms created:', value: appStats?.rooms || 0 },
    { label: 'Dice throws:', value: appStats?.diceThrows || 0 },
  ];

  return (
    <Grid container direction="row" justify="space-between" alignItems="stretch" spacing={4} className={classes.root}>
      {statsView.map((stat, id) => (
        <Grow key={stat.label} in timeout={id * 300 + 300}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography component="h5" variant="h5" color="textSecondary" className={classes.label}>
                {stat.label}
              </Typography>
              <Typography component="div" variant="h1" className={classes.value}>
                {stat.value}
              </Typography>
            </Paper>
          </Grid>
        </Grow>
      ))}
    </Grid>
  );
}

export const AppStats = withStyles(styles)(AppStatsC);
