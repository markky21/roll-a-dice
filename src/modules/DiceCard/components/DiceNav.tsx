import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { DiceSetForm } from './DiceSetForm';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      // display: 'flex',
      backgroundColor: '#f4f4f260',
    },
    details: {
      // display: 'flex',
      // flexDirection: 'column',
      width: theme.spacing(42),
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      float: 'right',
      width: theme.spacing(20),
      height: theme.spacing(16),
      margin: theme.spacing(-2, -2, 0, 0),
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(2),
      // paddingLeft: theme.spacing(1),
      // paddingBottom: theme.spacing(1),
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
          <CardMedia
            className={classes.cover}
            image="/assets/images/avatar-1.jpg"
            title="Live from space album cover"
          />
          <Typography component="h5" variant="h5">
            Set dice set
          </Typography>
          {false && (
            <Typography variant="subtitle1" color="textSecondary">
              Mac Miller
            </Typography>
          )}
          <div className={classes.controls}>
            <DiceSetForm />
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export const DiceNav = withStyles(styles)(DiceNavC);
