import React from 'react';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core/styles';
import {GridList, Slide} from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    gridList: {},
  });

interface AppStatsProps extends WithStyles<typeof styles> {
  visible?: boolean;
}

function AppStatsC(props: AppStatsProps) {
  const { classes, visible } = props;

  return (
    <Slide direction="up" in={visible}>
      <GridList className={classes.gridList} cols={2.5}>HELLO</GridList>
    </Slide>
  );
}

export const AppStats = withStyles(styles)(AppStatsC);
