import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: '#f4f4f260',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  });

interface DiceNavProps extends WithStyles<typeof styles> {}

function DiceNavC(props: DiceNavProps) {
  const { classes } = props;

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>Some text here</div>
      </div>
      <CardMedia className={classes.cover} image="/assets/images/avatar-1.jpg" title="Live from space album cover" />
    </Card>
  );
}

export const DiceNav = withStyles(styles)(DiceNavC);
