import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Dictionary } from 'react-redux-firebase';
import { Divider, List } from '@material-ui/core';

import { IProfile, IRoomLog, Log } from '../../../models/rooms.model';
import { LogListItem } from './LogListItem';
import { LogDiceThrow } from './LogDiceThrow';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      overflowY: 'scroll',
    },
  });

export interface LogsTimelineProps extends WithStyles<typeof styles> {
  profiles: Dictionary<IProfile>;
  logs: IRoomLog[];
}

function LogsTimelineC(props: LogsTimelineProps) {
  const { profiles, logs, classes } = props;

  const renderElement = () => {
    if (!logs || !logs.length) return '';
    return [...logs].reverse().map((log, id) => (
      <React.Fragment key={log.timestamp}>
        {!!id && <Divider variant="inset" component="li" light={true} />}
        <LogListItem profile={profiles[log.authorUid]} log={log}>
          {log.type === Log.DICE_ROLL && log.payload && <LogDiceThrow log={log} />}
        </LogListItem>
      </React.Fragment>
    ));
  };

  return <List className={classes.root}>{renderElement()}</List>;
}

export const LogsTimeline = React.memo(withStyles(styles)(LogsTimelineC));
