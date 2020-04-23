import React, { useContext, useEffect } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { firebaseSelectors } from '../store/firebase/firebase.selectors';
import { FirestoreCollection } from '../models/firebase.model';
import { IProfile, IRoom, IRoomCreateForm } from '../models/rooms.model';
import { locationSelectors } from '../store/location/location.selectors';
import { RoomCreate } from '../modules/RoomCreate/RoomCreate';
import { RouterPath } from '../models/paths';
import { SnackbarType, ToastContext } from '../contexts/Toast.context';

export function RoomCreateInRoomList() {
  const { path: locationPath } = useSelector(locationSelectors.match);

  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const firestore = useFirestore();
  const userProfile: IProfile = useSelector(firebaseSelectors.userProfile);
  const Toast = useContext(ToastContext);

  const handleClose = () => {
    setOpen(false);
    history.push(RouterPath.ROOMS_PATH);
  };

  function createNewRoom(formValues: IRoomCreateForm): Promise<void> {
    const newRoom: IRoom = {
      createdAt: Date.now().toString(),
      gameMasterUid: userProfile.uid,
      logs: [],
      playersUid: [],
      players: {
        [userProfile.uid]: {
          uid: userProfile.uid,
          avatarUrl: userProfile.avatarUrl || userProfile.photoURL,
          displayName: userProfile.displayName,
          email: userProfile.email,
          photoURL: userProfile.photoURL || userProfile.avatarUrl,
          gameMaster: true,
        },
      },
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
      Toast.setSnackbarConfig({
        type: SnackbarType.ERROR,
        open: true,
        text: 'Upss.. there was an error creating the room',
      });
    });
  };

  useEffect(() => {
    if (locationPath === RouterPath.ROOM_CREATE_PATH) {
      setOpen(true);
    }
  }, [locationPath]);

  return <RoomCreate open={open} onClose={handleClose} onSubmit={handleSubmit} />;
}
