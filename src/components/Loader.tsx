import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      height: '100%',
      width: '100%',
      backgroundColor: theme.palette.background.default,
      position: 'absolute',
      zIndex: 10000,
      left: 0,
      top: 0,
    },
    progress: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    svg: {
      width: '15vw',
      height: '15vh',
    },
  });

interface LoaderProps extends WithStyles<typeof styles> {
  style?: Object;
}

function LoaderC(props: LoaderProps) {
  const { classes, style } = props;

  return (
    <div className={classes.root} style={style}>
      <div className={classes.progress}>
        <img
          className={classes.svg}
          src={`${process.env.PUBLIC_URL}/assets/svg/loader-knot.svg`}
          alt="Roll a Dice..."
        />
      </div>
    </div>
  );
}

export const Loader = React.memo(withStyles(styles)(LoaderC));
