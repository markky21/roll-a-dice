import React from 'react';
import { Avatar, Grid, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import { dateUtils } from '../../../utils/date.utils';
import { IPlayerProfile, IRoomLog } from '../../../models/rooms.model';

const styles = (theme: Theme) =>
  createStyles({
    itemHeader: {
      width: '40%',
      paddingRight: theme.spacing(2),
      boxSizing: 'border-box',
    },
    itemContent: {
      width: '60%',
      boxSizing: 'border-box',
    },
  });

export interface LogListItemProps extends WithStyles<typeof styles> {
  profile: IPlayerProfile;
  log: IRoomLog;
  children?: any;
}

function LogListItemC(props: LogListItemProps) {
  const { profile, log, classes, children } = props;
  const { displayName, photoURL, avatarUrl, characterAvatarUrl, characterName } = profile || {};

  return (
    <ListItem alignItems="flex-start">
      <div className={classes.itemHeader}>
        <ListItemAvatar>
          <Avatar alt={displayName} src={characterAvatarUrl || avatarUrl || photoURL} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Grid container direction="row" justify="space-between" alignItems="flex-start">
              <Typography component={'span'} variant={'body1'}>
                {characterName || displayName}
              </Typography>
              <Typography component={'span'} variant={'caption'} color={'textSecondary'}>
                {dateUtils.timeStampToDetailedTime(log.timestamp)}
              </Typography>
            </Grid>
          }
        />
      </div>
      <div className={classes.itemContent}>{children}</div>
    </ListItem>
  );
}

export const LogsListItem = React.memo(withStyles(styles)(LogListItemC));
