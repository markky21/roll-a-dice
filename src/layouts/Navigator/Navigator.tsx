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

function Navigator(props: NavigatorProps) {
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
        expandable
        active={locationPath.indexOf(RouterPath.CHATS_PATH) > -1}
      />
    </Drawer>
  );
}

export default withStyles(styles)(Navigator);

{
  /*  </ListItem>*/
}
{
  /*  {categories.map(({ id, children }) => (*/
}
{
  /*    <React.Fragment key={id}>*/
}
{
  /*      <ListItem className={classes.categoryHeader}>*/
}
{
  /*        <ListItemText*/
}
{
  /*          classes={{*/
}
{
  /*            primary: classes.categoryHeaderPrimary,*/
}
{
  /*          }}*/
}
{
  /*        >*/
}
{
  /*          {id}*/
}
{
  /*        </ListItemText>*/
}
{
  /*      </ListItem>*/
}
{
  /*      {children.map(({ id: childId, icon, active }) => (*/
}
{
  /*        <ListItem key={childId} button className={clsx(classes.item, active && classes.itemActiveItem)}>*/
}
{
  /*          <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>*/
}
{
  /*          <ListItemText*/
}
{
  /*            classes={{*/
}
{
  /*              primary: classes.itemPrimary,*/
}
{
  /*            }}*/
}
{
  /*          >*/
}
{
  /*            {childId}*/
}
{
  /*          </ListItemText>*/
}
{
  /*        </ListItem>*/
}
{
  /*      ))}*/
}
{
  /*      <Divider className={classes.divider} />*/
}
{
  /*    </React.Fragment>*/
}
{
  /*  ))}*/
}
{
  /*</List>*/
}
{
  /*<ExpansionPanel className={classes.expansionPanel}>*/
}
{
  /*  <ExpansionPanelSummary*/
}
{
  /*    expandIcon={<ExpandMoreIcon />}*/
}
{
  /*    aria-label="Expand"*/
}
{
  /*    aria-controls="additional-actions1-content"*/
}
{
  /*    id="additional-actions1-header"*/
}
{
  /*    className={classes.expansionPanelSummary}*/
}
{
  /*    classes={{ content: classes.expansionPanelSummaryContainer }}*/
}
{
  /*  >*/
}
{
  /*    <NavLink to={RouterPath.CHATS_PATH}>*/
}
{
  /*      <ListItem className={clsx(classes.item, classes.itemCategory)}>*/
}
{
  /*        <ListItemIcon className={classes.itemIcon}>*/
}
{
  /*          <ChatIcon />*/
}
{
  /*        </ListItemIcon>*/
}
{
  /*        <ListItemText classes={{ primary: classes.itemPrimary }}> Chats </ListItemText>*/
}
{
  /*      </ListItem>*/
}
{
  /*    </NavLink>*/
}
{
  /*  </ExpansionPanelSummary>*/
}
{
  /*  <ExpansionPanelDetails>*/
}
{
  /*    /!*<ChatList showSearchBar={false} viewType={ChatListType.EMBEDDED} />*!/*/
}
{
  /*  </ExpansionPanelDetails>*/
}
{
  /*</ExpansionPanel>*/
}
