import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import { Menu, MenuItem } from '@material-ui/core';

import { useSelector } from 'react-redux';
import { firebaseSelectors } from '../store/firebase/firebase.selectors';
import { RouterPath } from '../models/paths';

const styles = (theme: Theme) =>
  createStyles({
    iconButtonAvatar: {
      padding: 4,
    },
    avatarSize: {
      border: `4px solid ${theme.palette.primary.main}`,
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  });

interface ProfileAvatarProps extends WithStyles<typeof styles> {}

function ProfileAvatarC(props: ProfileAvatarProps) {
  const firebase = useFirebase();
  const history = useHistory();
  const profile = useSelector(firebaseSelectors.userProfile);
  const isAuthenticated = useSelector(firebaseSelectors.authenticatedSelector);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    firebase.logout().then(() => {
      setAnchorEl(null);
      history.push(RouterPath.HOME_PATH);
    });
  };

  const handleLogin = () => {
    firebase
      .login({ provider: 'google', type: 'popup' })
      .then(() => {
        setAnchorEl(null);
        history.push(RouterPath.ROOMS_PATH);
      })
      .catch(err => alert(err.message));
  };

  const { classes } = props;

  return (
    <React.Fragment>
      <IconButton color="inherit" className={classes.iconButtonAvatar} onClick={handleClick}>
        <Avatar src={profile.avatarUrl} alt={profile.displayName} className={classes.avatarSize} />
      </IconButton>

      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        {isAuthenticated ? (
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        ) : (
          <MenuItem onClick={handleLogin}>Login with Google</MenuItem>
        )}
      </Menu>
    </React.Fragment>
  );
}

export const ProfileAvatar = withStyles(styles)(ProfileAvatarC);
