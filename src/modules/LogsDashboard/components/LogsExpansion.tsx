import React from 'react';
import {
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Typography,
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { IPlayerProfile, IRoomLog, Log } from '../../../models/rooms.model';
import { LogDiceThrow } from './LogDiceThrow';
import { LogNewPlayer } from './LogNewPlayer';
import { dateUtils } from '../../../utils/date.utils';

export interface LogsExpansionProps {
  profile: IPlayerProfile;
  logs: IRoomLog[];
}

function LogsExpansionC(props: LogsExpansionProps) {
  const { logs, profile } = props;
  const renderlog = (logs: IRoomLog[]) => {
    return [...logs].reverse().map((log, id) => (
      <ul key={log.timestamp}>
        {!!id && <Divider component="div" light={true} />}
        <Typography component={'span'} variant={'caption'} color={'textSecondary'}>
          {dateUtils.timeStampToDetailedTime(log.timestamp)}
        </Typography>
        {log.type === Log.DICE_ROLL && log.payload && <LogDiceThrow log={log} />}
        {log.type === Log.NEW_PLAYER && <LogNewPlayer log={log} />}
      </ul>
    ));
  };

  return (
    <ExpansionPanel elevation={0}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
          <Grid item>
            <Avatar
              src={profile.characterAvatarUrl || profile.avatarUrl || profile.photoURL}
              alt={profile.displayName}
            />
          </Grid>
          <Grid item>
            <Typography>{profile.characterName || profile.displayName}</Typography>
          </Grid>
        </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <article>{renderlog(logs)}</article>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export const LogsExpansion = React.memo(LogsExpansionC);
