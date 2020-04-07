import React, { useEffect } from 'react';
import { createStyles, Theme, useTheme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle, useMediaQuery } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { locationSelectors } from '../../store/location/location.selectors';
import { RoomCreateForm } from './components/RoomCreateForm';
import { RouterPath } from '../../models/paths';
import { IProfile, IRoom, IRoomCreateForm } from '../../models/rooms.model';
import { useFirestore } from 'react-redux-firebase';
import { FirestoreCollection } from '../../models/firestore.model';
import { firebaseSelectors } from '../../store/firebase/firebase.selectors';

const styles = (theme: Theme) => createStyles({});

export interface RoomCreateProps extends WithStyles<typeof styles> {}

function RoomCreateC(props: RoomCreateProps) {
  const { path: locationPath } = useSelector(locationSelectors.match);

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const history = useHistory();
  const firestore = useFirestore();
  const userProfile: IProfile = useSelector(firebaseSelectors.profileSelector);

  const handleClose = () => {
    setOpen(false);
    history.push(RouterPath.ROOMS_PATH);
  };

  function createNewRoom(formValues: IRoomCreateForm): Promise<void> {
    const newRoom: IRoom = {
      createdAt: Date.now().toString(),
      gameMaster: {
        uid: userProfile.uid,
        avatarUrl: userProfile.avatarUrl,
        displayName: userProfile.displayName,
        email: userProfile.email,
      },
      logs: [],
      players: [],
      ...formValues,
    };
    return firestore
      .collection(FirestoreCollection.ROOMS)
      .add(newRoom)
      .then(room => {
        setOpen(false);
        history.push(`${RouterPath.ROOM_PATH}/${room.id}`);
      });
  }

  const handleSubmit = (formValues: IRoomCreateForm) => {
    createNewRoom(formValues).catch((e: boolean) => {
      // TODO implement error message
      console.log({ e });
    });
  };

  useEffect(() => {
    if (locationPath === RouterPath.ROOM_CREATE_PATH) {
      setOpen(true);
    }
  }, [locationPath]);

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
      <DialogTitle>Create new Room</DialogTitle>
      <RoomCreateForm handleClose={handleClose} onSubmit={handleSubmit} />
    </Dialog>
  );
}

export const RoomCreate = withStyles(styles)(RoomCreateC);
