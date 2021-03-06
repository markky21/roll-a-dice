import ChatIcon from '@material-ui/icons/Chat';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import GamesIcon from '@material-ui/icons/Games';
import HomeIcon from '@material-ui/icons/Home';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
import { Omit } from '@material-ui/types';
import { useSelector } from 'react-redux';

import { ChatList, ChatListType } from '../../modules/ChatList/ChatList';
import { firestoreSelectors } from '../../store/firebase/firestore.selectors';
import { locationSelectors } from '../../store/location/location.selectors';
import { NavigatorItem } from './components/NavigatorItem';
import { RoomCard } from '../../containers/RoomCard';
import { RouterPath } from '../../models/paths';
import { roomsSelectors } from '../../store/rooms/rooms.selectors';

const styles = (theme: Theme) =>
  createStyles({
    logo: {
      fontSize: 24,
      color: theme.palette.common.white,
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
      backgroundColor: (theme.palette.background as any).secondary,
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  });

export interface NavigatorProps extends Omit<DrawerProps, 'classes'>, WithStyles<typeof styles> {}

function NavigatorC(props: NavigatorProps) {
  const { classes, ...other } = props;

  const { path: locationPath } = useSelector(locationSelectors.match);
  const selectedRoomData = useSelector(firestoreSelectors.selectedRoom);
  const drawerOpened = useSelector(roomsSelectors.drawerOpened);

  return (
    <Drawer
      open={drawerOpened}
      variant={locationPath === RouterPath.ROOMS_PATH_ID ? 'persistent' : 'permanent'}
      {...other}
    >
      <List disablePadding>
        <ListItem className={classes.logo}>Roll a Dice...</ListItem>
      </List>

      <NavigatorItem
        navLink={RouterPath.HOME_PATH}
        icon={<HomeIcon />}
        text="HomePage Page"
        active={RouterPath.HOME_PATH === locationPath}
      />

      <NavigatorItem
        navLink={RouterPath.ROOMS_PATH}
        icon={<MeetingRoomIcon />}
        text="Rooms"
        expandable={locationPath.indexOf(RouterPath.ROOMS_PATH) === -1}
        active={locationPath.indexOf(RouterPath.ROOMS_PATH) > -1}
      >
        <React.Fragment>List here</React.Fragment>
      </NavigatorItem>

      <NavigatorItem
        navLink={RouterPath.CHATS_PATH}
        icon={<ChatIcon />}
        text="Chats"
        expandable={locationPath.indexOf(RouterPath.CHATS_PATH) === -1}
        active={locationPath.indexOf(RouterPath.CHATS_PATH) > -1}
      >
        <ChatList viewType={ChatListType.EMBEDDED} />
      </NavigatorItem>

      {selectedRoomData && (
        <NavigatorItem
          icon={<GamesIcon />}
          text="Room Ditails"
          expandable={true}
          active={locationPath.indexOf(RouterPath.ROOM_PATH) > -1}
          defaultExpanded
        >
          <RoomCard room={selectedRoomData} />
        </NavigatorItem>
      )}
    </Drawer>
  );
}

export const Navigator = withStyles(styles)(NavigatorC);
