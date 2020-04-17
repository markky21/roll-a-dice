import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, ThemeProvider, withStyles, WithStyles } from '@material-ui/core/styles';
import { LinearProgress, Slide } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { firebaseSelectors } from '../store/firebase/firebase.selectors';
import { Header } from './Header/Header';
import { LoaderScreen } from '../components/LoaderScreen';
import { NavBar } from './NavBar';
import { theme } from '../styles/theme.styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="mailto:markky21@gmail.com">
        Marcin Mirecki
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = createStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  lineLoader: {
    position: 'fixed',
    height: '4px',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 10000,
    transition: 'max-height 0.2s ease;',
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100vw',
    overflow: 'hidden',
  },
  appWhenAuth: {
    maxWidth: `calc(100vw - ${theme.spacing(40)})`,
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: theme.palette.background.default,
  },

  footer: {
    padding: theme.spacing(1),
    background: theme.palette.background.default,
  },
});

export interface PaperbaseProps extends WithStyles<typeof styles> {
  children?: any;
}
function CoreLayoutC(props: PaperbaseProps) {
  const { classes, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isAuthenticated = useSelector(firebaseSelectors.isAuthenticated);
  const isAuthenticating = useSelector(firebaseSelectors.authenticatingSelector);
  const isRequesting = useSelector(firebaseSelectors.isRequesting);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <LoaderScreen isAuthenticating={isAuthenticating}>
        <div className={classes.root}>
          <CssBaseline />
          <Slide in={isRequesting} direction={'down'}>
            <LinearProgress className={classes.lineLoader} />
          </Slide>
          {isAuthenticated && <NavBar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />}

          <div className={clsx(classes.app, isAuthenticated && classes.appWhenAuth)}>
            <Header onDrawerToggle={handleDrawerToggle} />
            <main className={classes.main}>{children}</main>
            <footer className={classes.footer}>
              <Copyright />
            </footer>
          </div>
        </div>
      </LoaderScreen>
    </ThemeProvider>
  );
}

export const CoreLayout = withStyles(styles)(CoreLayoutC);
