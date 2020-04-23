import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import clsx from 'clsx';
import GavelIcon from '@material-ui/icons/Gavel';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Grid, GridListTile, GridListTileBar, IconButton, Tooltip } from '@material-ui/core';

import { IPlayerProfile } from '../../../models/rooms.model';
import { equal } from '../../../utils/object.utils';

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
    actionGrid: {
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
  player: IPlayerProfile;
  onEdit?: (uid: string) => void;
}

function PlayerTileC(props: PlayerTileProps) {
  const { classes, player, onEdit } = props;

  return (
    <GridListTile className={classes.tile}>
      <img src={player.characterAvatarUrl || player.avatarUrl || player.photoURL} alt={player.displayName} />
      <GridListTileBar
        title={player.characterName || player.displayName}
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

      {(player.gameMaster || onEdit) && (
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          spacing={0}
          className={classes.actionGrid}
        >
          {player.gameMaster && (
            <Grid item>
              <Tooltip className={clsx(player.connected ? classes.title : classes.titleDisable)} title={'Game Master'}>
                <IconButton aria-label={''}>
                  <GavelIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          )}
          {onEdit && (
            <Grid item>
              <Tooltip
                className={clsx(player.connected ? classes.title : classes.titleDisable)}
                title={'Edit character'}
              >
                <IconButton onClick={() => onEdit(player.uid)} aria-label={`edit character`}>
                  <AccountBoxIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          )}
        </Grid>
      )}
    </GridListTile>
  );
}

export const PlayerTile = React.memo(withStyles(styles)(PlayerTileC), (prev, next) => equal(prev.player, next.player));
