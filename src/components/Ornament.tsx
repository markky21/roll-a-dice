import clsx from 'clsx';
import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    ornament: {
      backgroundImage: 'url(/assets/svg/ornament-knot.svg)',
      width: '100%',
      height: '100%',
      backgroundRepeatX: 'repeat',
      backgroundRepeatY: 'no-repeat',
      backgroundSize: 'contain',
    },
    vartical: {
      backgroundImage: 'url(/assets/svg/ornament-knot-vartical.svg)',
      backgroundRepeatX: 'no-repeat',
      backgroundRepeatY: 'repeat',
    },
  });

interface OrnamentProps extends WithStyles<typeof styles> {
  vartical?: boolean;
}

function OrnamentC(props: OrnamentProps) {
  const { classes, vartical } = props;

  return <div className={clsx(classes.ornament, vartical && classes.vartical)} />;
}

export const Ornament = withStyles(styles)(OrnamentC);
