import React, { useState } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { GridList, Grow, Slide } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { firestoreSelectors } from '../../store/firebase/firestore.selectors';
import { PlayerTile } from './components/PlayerTile';
import { IPlayerProfile } from '../../models/rooms.model';
import { PlayerProfile } from './components/PlayerProfile';
import { firebaseSelectors } from '../../store/firebase/firebase.selectors';

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

  const players = useSelector(firestoreSelectors.selectedRoomPlayers$);
  const usersProfiles = useSelector(firestoreSelectors.usersProfiles$);
  const userProfile = useSelector(firebaseSelectors.userProfile$);
  const gameMasterUid = useSelector(firestoreSelectors.selectedRoomGameMasterUid$);
  const [editProfile, setEditProfile] = useState<string>(null);

  const renderPlayers = () =>
    Object.keys(players).map((playerUid, id) => {
      const player: IPlayerProfile = { ...players[playerUid], connected: usersProfiles[playerUid]?.connected };

      return (
        <Grow in key={playerUid} timeout={1000 * id + 300}>
          <PlayerTile
            player={player}
            onEdit={
              (userProfile.uid === gameMasterUid || userProfile.uid === playerUid) && (uid => setEditProfile(uid))
            }
          />
        </Grow>
      );
    });

  return (
    <React.Fragment>
      {players && (
        <Slide direction="up" in={visible}>
          <GridList className={classes.gridList} cols={2.5}>
            {renderPlayers()}
          </GridList>
        </Slide>
      )}

      <PlayerProfile open={!!editProfile} onClose={() => setEditProfile(null)} profileUid={editProfile} />
    </React.Fragment>
  );
}

export const Players = withStyles(styles)(PlayersC);
