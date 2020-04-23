import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Fade } from '@material-ui/core';

import { Loader } from './Loader';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      opacity: 0,
      visibility: 'hidden',
      transitionDelay: '1300ms',
      transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
    visible: {
      opacity: 1,
      visibility: 'visible',
    },
  });

interface LoaderScreenProps extends WithStyles<typeof styles> {
  children: React.ReactElement;
  isAuthenticating: boolean;
}

export const LoaderScreenC = (props: LoaderScreenProps) => {
  const { children, isAuthenticating = true } = props;

  return (
    <React.Fragment>
      <Fade in={isAuthenticating}>
        <Loader />
      </Fade>
      {children}
    </React.Fragment>
  );
};

export const LoaderScreen = withStyles(styles)(LoaderScreenC);
