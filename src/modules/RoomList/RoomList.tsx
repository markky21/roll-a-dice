import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Grow } from '@material-ui/core';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Dictionary } from 'react-redux-firebase';
import { NavLink, Redirect } from 'react-router-dom';

import { RouterPath } from '../../models/paths';
import { IRoom } from '../../models/rooms.model';
import { RoomListElements } from './components/RoomListElements';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      maxWidth: 936,
      margin: 'auto',
      overflow: 'hidden',
    },
    searchBar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
      fontSize: theme.typography.fontSize,
    },
    block: {
      display: 'block',
    },
    addUser: {
      marginRight: theme.spacing(1),
    },
    contentWrapper: {
      margin: '16px 16px',
    },
  });

export interface RoomListProps extends WithStyles<typeof styles> {
  showSearchBar?: boolean;
}

function RoomListC(props: RoomListProps) {
  const { classes, showSearchBar = true } = props;

  const userRooms: Dictionary<IRoom> = {};
  const roomId: Dictionary<IRoom> = {};
  const selectedRoom: string | null = null;

  const onRoomClick = (roomId: string) => {
    return <Redirect to={`${RouterPath.CHATS_PATH}/${roomId}`} />;
  };

  return (
    <Grow in>
      <Paper className={classes.paper}>
        {showSearchBar && (
          <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
            <Toolbar>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <SearchIcon className={classes.block} color="inherit" />
                </Grid>
                <Grid item xs>
                  <TextField
                    fullWidth
                    placeholder="Search by room name or players"
                    InputProps={{
                      disableUnderline: true,
                      className: classes.searchInput,
                    }}
                  />
                </Grid>
                <Grid item>
                  <NavLink to={RouterPath.ROOM_CREATE_PATH}>
                    <Button variant="contained" color="primary" className={classes.addUser}>
                      Create new Room
                    </Button>
                  </NavLink>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        )}
        <div className={classes.contentWrapper}>
          <RoomListElements rooms={userRooms} onRoomClick={onRoomClick} selectedRoom={selectedRoom} />
        </div>
      </Paper>
    </Grow>
  );
}

export const RoomList = withStyles(styles)(RoomListC);
