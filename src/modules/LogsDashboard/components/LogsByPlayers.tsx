import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Dictionary } from 'react-redux-firebase';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, List, Typography } from '@material-ui/core';

import { IProfile, IRoomLog } from '../../../models/rooms.model';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      overflowY: 'scroll',
    },

    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  });

export interface LogsByPlayersProps extends WithStyles<typeof styles> {
  profiles: Dictionary<IProfile>;
  logs: IRoomLog[];
}

function LogsByPlayersC(props: LogsByPlayersProps) {
  const { profiles, logs, classes } = props;

  console.log({ profiles });
  const renderElement = () => {
    return (
      <React.Fragment>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography className={classes.heading}>Expansion Panel 1</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </React.Fragment>
    );
  };

  return <List className={classes.root}>{renderElement()}</List>;
}

export const LogsByPlayers = React.memo(withStyles(styles)(LogsByPlayersC));
