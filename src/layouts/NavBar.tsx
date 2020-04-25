import Hidden from '@material-ui/core/Hidden';
import React from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import { Navigator } from './Navigator/Navigator';
import { theme } from '../styles/theme.styles';
import { roomsSelectors } from '../store/rooms/rooms.selectors';

let drawerWidth = 320;

const styles = createStyles({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      flexShrink: 0,
      width: '100%',
      maxWidth: drawerWidth,
      transition: 'max-width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    },
  },
});

interface NavBarProps extends WithStyles<typeof styles> {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

export function NavBarC(props: NavBarProps) {
  const { classes, mobileOpen } = props;
  const drawerOpened = useSelector(roomsSelectors.drawerOpened$);

  return (
    <nav className={classes.drawer} style={{ maxWidth: drawerOpened ? drawerWidth : 0 }}>
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
