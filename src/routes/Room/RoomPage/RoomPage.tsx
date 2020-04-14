import clsx from 'clsx';
import React, { useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';

import { chatsActions } from '../../../store/chats/chats.actions';
import { Chatter } from '../../../modules/Chatter';
import { DiceCard } from '../../../modules/DiceCard/DiceCard';
import { firebaseSelectors } from '../../../store/firebase/firebase.selectors';
import { FirestoreCollection } from '../../../models/firestore.model';
import { firestoreSelectors } from '../../../store/firebase/firestore.selectors';
import { locationActions } from '../../../store/location/location.actions';
import { LocationMatch } from '../../../store/location/location.model';
import { locationSelectors } from '../../../store/location/location.selectors';
import { Players } from '../../../modules/Players/Players';
import { roomsActions } from '../../../store/rooms/rooms.actions';
import { RoomSpeedDialWrapper } from './components/RoomSpeedDial';
import { roomsSelectors } from '../../../store/rooms/rooms.selectors';

// TODO: update grid heights when no profiles
const styles = (theme: Theme) => ({
  root: {
    position: 'relative' as 'relative',
    margin: theme.spacing(-6, -4),
    height: `calc(100% + ${theme.spacing(12)}px)`,
  },
  diceWrapper: {},
  chatter: {
    zIndex: 100000,
    position: 'fixed' as 'fixed',
    bottom: theme.spacing(4),
    // bottom: theme.spacing(26), // TODO: update height or grid structure
    right: theme.spacing(2),
    transition: 'bottom 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  },
  chatterLower: {
    bottom: theme.spacing(4),
  },
  speedDial: {
    position: 'absolute' as 'absolute',
    bottom: theme.spacing(23),
    left: theme.spacing(3),
    zIndex: 10,
    transition: 'bottom 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  },
  speedDialLower: {
    bottom: theme.spacing(3),
  },
  cssGrid: {
    height: 'calc(100% - 60px)',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr 160px',
    rowGap: `${theme.spacing(2)}px`,
    columnGap: `${theme.spacing(2)}px`,
    padding: theme.spacing(2, 2, 0, 2),
  },
  cssItem1: {
    gridColumn: 1,
    gridRow: 1,
  },
  cssItem2: {
    gridColumn: 1,
    gridRow: 2,
  },
});

const useStyles = makeStyles(styles);

export interface RoomListProps {
  match: LocationMatch;
}

export function RoomC(props: RoomListProps) {
  const { match } = props;

  const chatOpened = useSelector(roomsSelectors.chatOpened);
  const playersOpened = useSelector(roomsSelectors.playersOpened);
  const classes = useStyles();
  const dispatch = useDispatch();
  const firestore = useFirestore();
  const selectedRoomData = useSelector(firestoreSelectors.selectedRoom);
  const selectedRoomUid = useSelector(roomsSelectors.selectedRoomUid);
  const storeLocationMatch = useSelector(locationSelectors.match);
  const userProfile = useSelector(firebaseSelectors.userProfile);

  /**
   * Effects logic
   */
  function onChangeSetLocationMatch(): void {
    if (JSON.stringify(match) !== JSON.stringify(storeLocationMatch)) {
      dispatch(locationActions.matchChange(match));
    }
    dispatch(roomsActions.setSelectedRoom((storeLocationMatch.params as any)['roomId']));
  }
  function onUnmountSetSelectedRoomToNull(): void {
    dispatch(roomsActions.setSelectedRoom(null));
  }
  function onChangeSetSelectedChat(): void {
    dispatch(chatsActions.setSelectedChat(selectedRoomData?.chatUid || null));
  }
  function onEnterTheRoomAddUserToPlayers(): void {
    if (!selectedRoomData?.players || !userProfile.uid || selectedRoomData.gameMaster.uid === userProfile.uid) {
      return;
    }

    if (selectedRoomData.players.indexOf(userProfile.uid) === -1) {
      let documentRef = firestore.doc(`${FirestoreCollection.ROOMS}/${selectedRoomUid}`);
      firestore.runTransaction((t: any) => {
        return t
          .get(documentRef)
          .then((doc: any) => {
            const players = [...doc.data().players, userProfile.uid];
            return t.update(documentRef, { players });
          })
          .catch((err: any) => {
            // TODO: add toast message
            // TRANSACTION_FAILURE action dispatched
            console.log('Transaction failure:', err);
          });
      });
    }
  }

  /**
   * Effects
   */
  useEffect(() => onChangeSetLocationMatch());

  useEffect(() => {
    onEnterTheRoomAddUserToPlayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRoomUid, selectedRoomData?.createdAt, userProfile.uid]);

  useEffect(() => {
    return () => onUnmountSetSelectedRoomToNull();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onChangeSetSelectedChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRoomData?.chatUid]);

  return (
    <section className={classes.root}>
      <nav className={clsx(classes.speedDial, !playersOpened && classes.speedDialLower)}>
        <RoomSpeedDialWrapper />
      </nav>

      <article className={clsx(classes.chatter, !playersOpened && classes.chatterLower)}>
        <Chatter visbile={chatOpened} />
      </article>

      <div className={classes.cssGrid}>
        <div className={classes.cssItem1}>
          <DiceCard />
        </div>
        <div className={classes.cssItem2}>
          <Players visible={playersOpened} />
        </div>
      </div>
    </section>
  );
}
