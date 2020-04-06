import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import { Grow } from '@material-ui/core';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Dictionary } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

import { RouterPath } from '../../models/paths';
import { IRoom } from '../../models/rooms.model';
import { RoomListElements } from './components/RoomListElements';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
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
    contentWrapper: {
      margin: '16px 16px',
    },
  });

export interface RoomListProps extends WithStyles<typeof styles> {
  showSearchBar?: boolean;
  rooms: Dictionary<IRoom>;
  selectedRoom: string | null;
  label: string;
}

function RoomListC(props: RoomListProps) {
  const { classes, rooms, showSearchBar, selectedRoom, label } = props;

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
                    placeholder={label}
                    InputProps={{
                      disableUnderline: true,
                      className: classes.searchInput,
                    }}
                  />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        )}
        <div className={classes.contentWrapper}>
          <RoomListElements rooms={rooms} onRoomClick={onRoomClick} selectedRoom={selectedRoom} />
        </div>
      </Paper>
    </Grow>
  );
}

export const RoomList = withStyles(styles)(RoomListC);
