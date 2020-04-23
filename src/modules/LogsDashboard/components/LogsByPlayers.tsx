import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Dictionary } from 'react-redux-firebase';
import { List } from '@material-ui/core';

import { IPlayerProfile, IRoomLog } from '../../../models/rooms.model';
import { LogsExpansion } from './LogsExpansion';
import { equal } from '../../../utils/object.utils';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      overflowY: 'scroll',
    },
  });

export interface LogsByPlayersProps extends WithStyles<typeof styles> {
  profiles: Dictionary<IPlayerProfile>;
  logs: IRoomLog[];
}

function LogsByPlayersC(props: LogsByPlayersProps) {
  const { profiles, logs, classes } = props;

  const renderElement = () => {
    return (
      <React.Fragment>
        {Object.keys(profiles).map(profileUid => (
          <LogsExpansion
            key={profileUid}
            profile={profiles[profileUid]}
            logs={logs.filter(log => log.authorUid === profileUid)}
          />
        ))}
      </React.Fragment>
    );
  };

  return <List className={classes.root}>{renderElement()}</List>;
}

export const LogsByPlayers = React.memo(withStyles(styles)(LogsByPlayersC), equal);
