import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import { ProfileAvatar } from '../../containers/ProfileAvatar';
import { Ornament } from '../../components/Ornament';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme: Theme) =>
  createStyles({
    secondaryBar: {
      zIndex: 0,
    },
    menuButton: {
      marginLeft: -theme.spacing(1),
    },
    link: {
      textDecoration: 'none',
      color: lightColor,
      '&:hover': {
        color: theme.palette.common.white,
      },
    },
    button: {
      borderColor: lightColor,
    },
    ornament: {
      bottom: '2px',
      height: '24px',
      opacity: 0.2,
      position: 'absolute',
      zIndex: -1,
      width: ' 100%',
    },
    avatar: {
      marginBottom: '-16px',
    },
  });

interface HeaderProps extends WithStyles<typeof styles> {
  onDrawerToggle: () => void;
}

function HeaderC(props: HeaderProps) {
  const { classes, onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={2}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item>
              <div className={classes.avatar}>
                <ProfileAvatar />
              </div>
            </Grid>
          </Grid>
        </Toolbar>
        <div className={classes.ornament}>
          <Ornament />
        </div>
      </AppBar>
    </React.Fragment>
  );
}

export const Header = React.memo(withStyles(styles)(HeaderC));
