import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import React from 'react';

import Navigator from './Navigator/Navigator';
import { theme } from '../styles/theme.styles';

const drawerWidth = 256;

const styles = createStyles({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
});

export interface NavBarProps extends WithStyles<typeof styles> {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

export function NavBarC(props: NavBarProps) {
  const { classes, mobileOpen } = props;

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="js">
        <Navigator
          PaperProps={{ style: { width: drawerWidth } }}
          variant="temporary"
          open={mobileOpen}
          onClose={props.handleDrawerToggle}
        />
      </Hidden>
      <Hidden xsDown implementation="css">
        <Navigator PaperProps={{ style: { width: drawerWidth } }} />
      </Hidden>
    </nav>
  );
}

export const NavBar = withStyles(styles)(NavBarC);
