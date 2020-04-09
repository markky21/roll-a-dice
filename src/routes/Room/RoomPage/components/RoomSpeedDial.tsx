import ForumIcon from '@material-ui/icons/Forum';
import GroupIcon from '@material-ui/icons/Group';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { mainSelectors } from '../../../../store/main.selectors';
import { roomsActions } from '../../../../store/rooms/rooms.actions';
import { ISpeedDialAction, SpeedDialWrapper } from '../../../../components/SpeedDial';
import { roomsSelectors } from '../../../../store/rooms/rooms.selectors';

const styles = (theme: Theme) =>
  createStyles({
    snackbar: {
      top: theme.spacing(8),
    },
  });
interface RoomSpeedDialCProps extends WithStyles<typeof styles> {}

function RoomSpeedDialC(props: RoomSpeedDialCProps) {
  const { classes } = props;
  const dispatch = useDispatch();

  const isGameMasterOfSelectedRoom = useSelector(mainSelectors.isGameMasterOfSelectedRoom);
  const drawerOpened = useSelector(roomsSelectors.drawerOpened);
  const chatOpened = useSelector(roomsSelectors.chatOpened);
  const playersOpened = useSelector(roomsSelectors.playersOpened);
  const [snackbarConfig, setSnackbarConfig] = React.useState<{
    type: 'success' | 'error';
    open: boolean;
    text: string;
  }>({
    type: 'success',
    open: false,
    text: '',
  });

  function copyRoomUrlToClipboard(): void {
    navigator.permissions.query({ name: 'clipboard-write' as any }).then(result => {
      if (result.state === 'granted' || result.state === 'prompt') {
        navigator.clipboard.writeText(window.location.href).then(
          () => setSnackbarConfig({ type: 'success', open: true, text: 'Room URL copied to clipboard!' }),
          () => setSnackbarConfig({ type: 'error', open: true, text: 'Upss.. there was an error' })
        );
      }
    });
  }

  const actionsAdditional: ISpeedDialAction[] = isGameMasterOfSelectedRoom ? [] : [];
  const actions: ISpeedDialAction[] = [
    {
      icon: drawerOpened ? <NavigateBeforeIcon /> : <NavigateNextIcon />,
      name: drawerOpened ? 'Hide Nav' : 'Show Nav',
      callback: cb => dispatch(roomsActions.setDrawerOpenValue(!drawerOpened)),
    },
    {
      icon: <ForumIcon />,
      name: chatOpened ? 'Hide chat' : 'Show Chat',
      callback: cb => dispatch(roomsActions.setChatOpenValue(!chatOpened)),
    },
    {
      icon: <GroupIcon />,
      name: playersOpened ? 'Hide players' : 'Show players',
      callback: cb => dispatch(roomsActions.setPlayersOpenValue(!playersOpened)),
    },
    {
      icon: <ShareIcon />,
      name: 'Copy Room Url',
      callback: cb => copyRoomUrlToClipboard(),
    },
    ...actionsAdditional,
  ];

  return (
    <React.Fragment>
      <SpeedDialWrapper actions={actions} direction={'up'} />
      <Snackbar
        className={classes.snackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={snackbarConfig.open}
        autoHideDuration={6000}
        onClose={() => setSnackbarConfig({ ...snackbarConfig, open: false })}
      >
        <Alert onClose={() => setSnackbarConfig({ ...snackbarConfig, open: false })} severity={snackbarConfig.type}>
          {snackbarConfig.text}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}

export const RoomSpeedDialWrapper = withStyles(styles)(RoomSpeedDialC);
