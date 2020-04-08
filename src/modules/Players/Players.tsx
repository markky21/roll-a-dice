import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { GridList, Grow, Slide } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { firestoreSelectors } from '../../store/firebase/firestore.selectors';
import { PlayerTile } from './components/PlayerTile';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      height: theme.spacing(20),
      width: '100%',
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
  });

interface PlayersProps extends WithStyles<typeof styles> {
  visible?: boolean;
}

function PlayersC(props: PlayersProps) {
  const { classes, visible } = props;

  const players = useSelector(firestoreSelectors.selectedRoomPlayers);
  const gameMaster = useSelector(firestoreSelectors.selectedRoomGameMasterProfile);

  return (
    <Slide direction="up" in={visible}>
      <GridList className={classes.gridList} cols={2.5}>
        {gameMaster && (
          <Grow in timeout={300}>
            <PlayerTile player={gameMaster} gameMaster />
          </Grow>
        )}

        {players &&
          players.map((player, id) => (
            <Grow in key={player.uid} timeout={1000 * id + 1300}>
              <PlayerTile player={player} />
            </Grow>
          ))}
      </GridList>
    </Slide>
  );
}

export const Players = withStyles(styles)(PlayersC);
