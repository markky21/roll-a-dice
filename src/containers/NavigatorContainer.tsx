import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = (theme: Theme) => createStyles({});

interface NavigatorContainerProps extends WithStyles<typeof styles> {}

function NavigatorContainerC(props: NavigatorContainerProps) {
  const { classes } = props;

  return <React.Fragment></React.Fragment>;
}

export const NavigatorContainer = withStyles(styles)(NavigatorContainerC);
