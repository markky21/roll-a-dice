import React, { useContext } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import { FirestoreCollection } from '../models/firebase.model';
import { firestoreSelectors } from '../store/firebase/firestore.selectors';
import { IRoomCreateForm } from '../models/rooms.model';
import { RoomCreate } from '../modules/RoomCreate/RoomCreate';
import { roomsSelectors } from '../store/rooms/rooms.selectors';
import { SnackbarType, ToastContext } from '../contexts/Toast.context';

interface RoomCreateInRoomProps {
  open: boolean;
  onClose: () => void;
}

export function RoomCreateInRoom(props: RoomCreateInRoomProps) {
  const { open, onClose } = props;
  const firestore = useFirestore();
  const selectedRoomFormData = useSelector(firestoreSelectors.selectedRoomFormData) as IRoomCreateForm;
  const selectedRoomUid = useSelector(roomsSelectors.selectedRoomUid) as string;
  const Toast = useContext(ToastContext);

  const handleSubmit = (formValues: IRoomCreateForm) => {
    Object.keys(formValues).forEach(key => (formValues as any)[key] === undefined && delete (formValues as any)[key]);

    firestore
      .doc(`${FirestoreCollection.ROOMS}/${selectedRoomUid}`)
      .update({ ...formValues })
      .then(room => {
        onClose();
      })
      .catch((e: boolean) => {
        Toast.setSnackbarConfig({
          type: SnackbarType.ERROR,
          open: true,
          text: 'Upss.. there was an error updating the room',
        });
      });
  };

  return <RoomCreate open={open} onClose={onClose} onSubmit={handleSubmit} initialValues={selectedRoomFormData} />;
}
