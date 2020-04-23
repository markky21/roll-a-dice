import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Dictionary } from 'react-redux-firebase';
import { Divider, List } from '@material-ui/core';

import { IPlayerProfile, IRoomLog, Log } from '../../../models/rooms.model';
import { LogsListItem } from './LogsListItem';
import { LogDiceThrow } from './LogDiceThrow';
import { LogNewPlayer } from './LogNewPlayer';
import { equal } from '../../../utils/object.utils';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      overflowY: 'scroll',
    },
  });

export interface LogsTimelineProps extends WithStyles<typeof styles> {
  profiles: Dictionary<IPlayerProfile>;
  logs: IRoomLog[];
}

function LogsTimelineC(props: LogsTimelineProps) {
  const { profiles, logs, classes } = props;

  const renderElement = () => {
    if (!logs || !logs.length) return '';
    return [...logs].reverse().map((log, id) => (
      <React.Fragment key={log.timestamp}>
        {!!id && <Divider variant="inset" component="li" light={true} />}
        <LogsListItem profile={profiles[log.authorUid]} log={log}>
          {log.type === Log.DICE_ROLL && log.payload && <LogDiceThrow log={log} />}
          {log.type === Log.NEW_PLAYER && <LogNewPlayer log={log} />}
        </LogsListItem>
      </React.Fragment>
    ));
  };

  return <List className={classes.root}>{renderElement()}</List>;
}

export const LogsTimeline = React.memo(withStyles(styles)(LogsTimelineC), equal);
