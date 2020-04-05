import ChatIcon from '@material-ui/icons/Chat';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
import { Omit } from '@material-ui/types';

import { RouterPath } from '../../models/paths';
import { NavigatorItem } from './components/NavigatorItem';
import { useSelector } from 'react-redux';
import { locationSelectors } from '../../store/location/location.selectors';
import { ChatListType, ChatList } from '../../modules/ChatList/ChatList';

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

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={classes.logo}>Roll a Dice...</ListItem>
      </List>

      <NavigatorItem
        navLink={RouterPath.HOME_PATH}
        icon={<HomeIcon />}
        text="Home Page"
        active={RouterPath.HOME_PATH === locationPath}
      />
      <NavigatorItem
        navLink={RouterPath.CHATS_PATH}
        icon={<ChatIcon />}
        text="Chats"
        expandable={locationPath.indexOf(RouterPath.CHATS_PATH) === -1}
        active={locationPath.indexOf(RouterPath.CHATS_PATH) > -1}
      >
        <ChatList viewType={ChatListType.EMBEDDED} />
      </NavigatorItem>
    </Drawer>
  );
}

export const Navigator = withStyles(styles)(NavigatorC);
