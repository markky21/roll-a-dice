import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { DrawerProps } from '@material-ui/core/Drawer';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { Omit } from '@material-ui/types';

import { RouterPath } from '../../../models/paths';

const styles = (theme: Theme) =>
  createStyles({
    item: {
      paddingTop: 1,
      paddingBottom: 1,
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    itemCategoryWrapper: {
      minHeight: '60px',
    },
    itemCategory: {
      width: '100%',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    itemCategoryAbsolute: {
      position: 'absolute',
      top: 0,
    },
    itemActiveItem: {
      color: theme.palette.secondary.main,
    },
    itemPrimary: {
      fontSize: 'inherit',
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    },
    expansionPanel: {
      borderRadius: '0 !important',
      padding: '0 !important',
      margin: '0 !important',
      backgroundColor: (theme.palette.background as any).secondary,
    },
    expansionPanelSummary: {
      margin: '0 !important',
      padding: '0 16px 0px 0 !important',
    },
    expansionPanelSummaryContainer: {
      padding: '0 !important',
      margin: '0 !important',
    },
    expandIcon: {
      color: 'rgba(255, 255, 255, 0.7)',
    },
    divider: {
      boxShadow: '0 -1px 0 #404854 inset',
    },
  });

export interface NavigatorItemProps extends Omit<DrawerProps, 'classes'>, WithStyles<typeof styles> {
  active?: boolean;
  children?: React.ReactElement | React.ReactFragment;
  icon?: React.ReactElement;
  navLink?: RouterPath;
  text?: string;
  expandable?: boolean;
  defaultExpanded?: boolean;
}

function NavigatorItemC(props: NavigatorItemProps) {
  const { classes, children, icon, text, navLink, active, expandable, defaultExpanded } = props;

  const setNavLink = (children: React.ReactElement) =>
    navLink ? <NavLink to={navLink}>{children}</NavLink> : <React.Fragment>{children}</React.Fragment>;

  return expandable ? (
    <ExpansionPanel className={clsx(classes.expansionPanel, classes.divider)} defaultExpanded={defaultExpanded}>
      <ExpansionPanelSummary
        aria-controls="additional-actions1-content"
        aria-label="Expand"
        classes={{ content: classes.expansionPanelSummaryContainer, expandIcon: classes.expandIcon }}
        className={classes.expansionPanelSummary}
        expandIcon={<ExpandMoreIcon />}
        id="additional-actions1-header"
      >
        <div className={classes.itemCategoryWrapper} />

        {setNavLink(
          <ListItem
            button
            className={clsx(
              classes.item,
              classes.itemCategory,
              active && classes.itemActiveItem,
              classes.itemCategoryAbsolute
            )}
          >
            {icon && <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>}
            {text && <ListItemText classes={{ primary: classes.itemPrimary }}>{text}</ListItemText>}
          </ListItem>
        )}
      </ExpansionPanelSummary>
      {children && <ExpansionPanelDetails>{children}</ExpansionPanelDetails>}
    </ExpansionPanel>
  ) : (
    setNavLink(
      <ListItem
        button
        className={clsx(classes.item, classes.itemCategory, active && classes.itemActiveItem, classes.divider)}
      >
        {icon && <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>}
        {text && <ListItemText classes={{ primary: classes.itemPrimary }}>{text}</ListItemText>}
      </ListItem>
    )
  );
}

export const NavigatorItem = withStyles(styles)(NavigatorItemC);
