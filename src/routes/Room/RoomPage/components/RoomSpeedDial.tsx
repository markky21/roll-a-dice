import EditIcon from '@material-ui/icons/Edit';
import ForumIcon from '@material-ui/icons/Forum';
import GroupIcon from '@material-ui/icons/Group';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React, { useContext, useState } from 'react';
import ShareIcon from '@material-ui/icons/Share';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import { ISpeedDialAction, SpeedDialWrapper } from '../../../../components/SpeedDial';
import { mainSelectors } from '../../../../store/main.selectors';
import { roomsActions } from '../../../../store/rooms/rooms.actions';
import { roomsSelectors } from '../../../../store/rooms/rooms.selectors';
import { RoomCreateInRoom } from '../../../../containers/RoomCreateInRoom';
import { SnackbarType, ToastContext } from '../../../../contexts/Toast.context';

const styles = (theme: Theme) => createStyles({});
interface RoomSpeedDialCProps extends WithStyles<typeof styles> {}

function RoomSpeedDialC(props: RoomSpeedDialCProps) {
  const dispatch = useDispatch();

  const Toast = useContext(ToastContext);
  const isGameMasterOfSelectedRoom = useSelector(mainSelectors.isGameMasterOfSelectedRoom$);
  const drawerOpened = useSelector(roomsSelectors.drawerOpened$);
  const chatOpened = useSelector(roomsSelectors.chatOpened$);
  const playersOpened = useSelector(roomsSelectors.playersOpened$);
  const [showRoomForm, setShowRoomForm] = useState(false);

  function copyRoomUrlToClipboard(): void {
    navigator.permissions.query({ name: 'clipboard-write' as any }).then(result => {
      if (result.state === 'granted' || result.state === 'prompt') {
        navigator.clipboard.writeText(window.location.href).then(
          () =>
            Toast.setSnackbarConfig({ type: SnackbarType.SUCCESS, open: true, text: 'Room URL copied to clipboard!' }),
          () => Toast.setSnackbarConfig({ type: SnackbarType.ERROR, open: true, text: 'Upss.. there was an error' })
        );
      }
    });
  }

  const actionsAdditional: ISpeedDialAction[] = isGameMasterOfSelectedRoom
    ? [
        {
          icon: <EditIcon />,
          name: 'Edit Room Description',
          callback: cb => setShowRoomForm(true),
        },
      ]
    : [];
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
      <SpeedDialWrapper actions={actions} direction={'right'} />
      <RoomCreateInRoom open={showRoomForm} onClose={() => setShowRoomForm(false)} />
    </React.Fragment>
  );
}

export const RoomSpeedDialWrapper = withStyles(styles)(RoomSpeedDialC);
