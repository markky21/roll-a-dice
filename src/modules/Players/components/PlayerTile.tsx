import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import GavelIcon from '@material-ui/icons/Gavel';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { GridListTile, GridListTileBar, IconButton, Tooltip } from '@material-ui/core';

import { IProfile } from '../../../models/rooms.model';

const styles = (theme: Theme) =>
  createStyles({
    tile: {
      borderRadius: theme.spacing(1),
      marginRight: theme.spacing(2),
      maxWidth: theme.spacing(30),
      overflow: 'hidden',
      padding: '0 !Important',
      width: '100%',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleDisable: {
      color: theme.palette.warning.light,
    },
    masterGame: {
      position: 'absolute' as 'absolute',
      zIndex: 10,
      top: 0,
      right: 0,
    },
    titleBar: {
      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  });

interface PlayerTileProps extends WithStyles<typeof styles> {
  player: IProfile;
  gameMaster?: boolean;
}

function PlayerTileC(props: PlayerTileProps) {
  const { classes, player, gameMaster } = props;

  return (
    <GridListTile className={classes.tile}>
      <img src={player.avatarUrl || player.photoURL} alt={player.displayName} />
      <GridListTileBar
        title={player.displayName}
        classes={{
          root: classes.titleBar,
          title: player.connected ? classes.title : classes.titleDisable,
        }}
        actionIcon={
          <Tooltip title={player.connected ? 'Online' : 'Offline'}>
            <IconButton aria-label={`star ${player.displayName}`}>
              {player.connected ? (
                <CheckCircleIcon className={classes.title} />
              ) : (
                <HighlightOffIcon className={classes.titleDisable} />
              )}
            </IconButton>
          </Tooltip>
        }
      />

      {gameMaster && (
        <Tooltip
          className={clsx(classes.masterGame, player.connected ? classes.title : classes.titleDisable)}
          title={'Game Master'}
        >
          <IconButton aria-label={`star ${player.displayName}`}>
            <GavelIcon />
          </IconButton>
        </Tooltip>
      )}
    </GridListTile>
  );
}

export const PlayerTile = React.memo(withStyles(styles)(PlayerTileC));
