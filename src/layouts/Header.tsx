import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { ProfileAvatar } from '../containers/ProfileAvatar';

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
  });

interface HeaderProps extends WithStyles<typeof styles> {
  onDrawerToggle: () => void;
}

function Header(props: HeaderProps) {
  const { classes, onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
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
            {/*<Grid item>*/}
            {/*  <Link className={classes.link} href="#" variant="body2">*/}
            {/*    Go to docs*/}
            {/*  </Link>*/}
            {/*</Grid>*/}
            {/*<Grid item>*/}
            {/*  <Tooltip title="Alerts • No alerts">*/}
            {/*    <IconButton color="inherit">*/}
            {/*      <NotificationsIcon />*/}
            {/*    </IconButton>*/}
            {/*  </Tooltip>*/}
            {/*</Grid>*/}
            <Grid item>
              <ProfileAvatar />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar component="div" className={classes.secondaryBar} color="primary" position="static" elevation={0}>
        {/*<Toolbar>*/}
        {/*  <Grid container alignItems="center" spacing={1}>*/}
        {/*    <Grid item xs>*/}
        {/*      <Typography color="inherit" variant="h5" component="h1">*/}
        {/*        Authentication*/}
        {/*      </Typography>*/}
        {/*    </Grid>*/}
        {/*    <Grid item>*/}
        {/*      <Button*/}
        {/*        className={classes.button}*/}
        {/*        variant="outlined"*/}
        {/*        color="inherit"*/}
        {/*        size="small"*/}
        {/*      >*/}
        {/*        Web setup*/}
        {/*      </Button>*/}
        {/*    </Grid>*/}
        {/*    <Grid item>*/}
        {/*      <Tooltip title="Help">*/}
        {/*        <IconButton color="inherit">*/}
        {/*          <HelpIcon />*/}
        {/*        </IconButton>*/}
        {/*      </Tooltip>*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*</Toolbar>*/}
      </AppBar>
      {/*<AppBar*/}
      {/*  component="div"*/}
      {/*  className={classes.secondaryBar}*/}
      {/*  color="primary"*/}
      {/*  position="static"*/}
      {/*  elevation={0}*/}
      {/*>*/}
      {/*  <Tabs value={0} textColor="inherit">*/}
      {/*    <Tab textColor="inherit" label="Users" />*/}
      {/*    <Tab textColor="inherit" label="Sign-in method" />*/}
      {/*    <Tab textColor="inherit" label="Templates" />*/}
      {/*    <Tab textColor="inherit" label="Usage" />*/}
      {/*  </Tabs>*/}
      {/*</AppBar>*/}
    </React.Fragment>
  );
}

export default withStyles(styles)(Header);
