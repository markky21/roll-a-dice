import React from 'react';
import { createStyles, ThemeProvider, withStyles, WithStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Header from './Header/Header';
import { theme } from '../styles/theme.styles';
import { NavBar } from './NavBar';
import { useSelector } from 'react-redux';
import { authenticatedSelector } from '../store/firebase/firebase.selectors';

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
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: theme.palette.background.default,
  },
  footer: {
    padding: theme.spacing(2),
    background: theme.palette.background.default,
  },
});

export interface PaperbaseProps extends WithStyles<typeof styles> {
  children?: any;
}
function CoreLayoutC(props: PaperbaseProps) {
  const { classes, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isAuthenticated = useSelector(authenticatedSelector);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />

        {isAuthenticated && <NavBar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />}

        <div className={classes.app}>
          <Header onDrawerToggle={handleDrawerToggle} />
          <main className={classes.main}>{children}</main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export const CoreLayout = withStyles(styles)(CoreLayoutC);
