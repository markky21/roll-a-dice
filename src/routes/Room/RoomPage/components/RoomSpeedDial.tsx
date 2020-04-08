import ForumIcon from '@material-ui/icons/Forum';
import GroupIcon from '@material-ui/icons/Group';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import { mainSelectors } from '../../../../store/main.selectors';
import { roomsActions } from '../../../../store/rooms/rooms.actions';
import { ISpeedDialAction, SpeedDialWrapper } from '../../../../components/SpeedDial';
import { roomsSelectors } from '../../../../store/rooms/rooms.selectors';

const styles = (theme: Theme) => createStyles({});
interface RoomSpeedDialCProps extends WithStyles<typeof styles> {}

function RoomSpeedDialC(props: RoomSpeedDialCProps) {
  const dispatch = useDispatch();

  const isGameMasterOfSelectedRoom = useSelector(mainSelectors.isGameMasterOfSelectedRoom);
  const drawerOpened = useSelector(roomsSelectors.drawerOpened);
  const chatOpened = useSelector(roomsSelectors.chatOpened);
  const playersOpened = useSelector(roomsSelectors.playersOpened);

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
    ...actionsAdditional,
  ];

  return <SpeedDialWrapper actions={actions} direction={'up'} />;
}

export const RoomSpeedDialWrapper = withStyles(styles)(RoomSpeedDialC);
