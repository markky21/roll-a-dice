import React, { useContext } from 'react';

import { Dictionary, useFirestore } from 'react-redux-firebase';
import { FirestoreCollection } from '../../../models/firebase.model';
import { firestoreSelectors } from '../../../store/firebase/firestore.selectors';
import { FormDialog } from '../../../components/FormDialog';
import { IPlayerProfile, IRoomPlayerProfileForm } from '../../../models/rooms.model';
import { PlayerProfileForm } from './PlayerProfileForm';
import { roomsSelectors } from '../../../store/rooms/rooms.selectors';
import { useSelector } from 'react-redux';
import { SnackbarType, ToastContext } from '../../../contexts/Toast.context';

export interface PlayerProfileProps {
  open: boolean;
  onClose: () => void;
  profileUid: string;
}

export function PlayerProfile(props: PlayerProfileProps) {
  const { open, onClose, profileUid } = props;

  const firestore = useFirestore();
  const selectedRoomUid = useSelector(roomsSelectors.selectedRoomUid$);
  const selectedRoom = useSelector(firestoreSelectors.selectedRoom$);
  const Toast = useContext(ToastContext);

  const onSubmit = (formValues: IRoomPlayerProfileForm) => {
    Object.keys(formValues).forEach(key => (formValues as any)[key] === undefined && delete (formValues as any)[key]);

    const players: Dictionary<IPlayerProfile> = { ...selectedRoom.players, [profileUid]: formValues };
    firestore
      .doc(`${FirestoreCollection.ROOMS}/${selectedRoomUid}`)
      .update({ players })
      .then(room => {
        onClose();
      })
      .catch((e: boolean) => {
        Toast.setSnackbarConfig({
          type: SnackbarType.ERROR,
          open: true,
          text: 'Upss.. there was an error updating the player form',
        });
      });
  };

  return (
    <FormDialog open={open} onClose={onClose} title="Edit character">
      {selectedRoom?.players[profileUid] && (
        <PlayerProfileForm onClose={onClose} onSubmit={onSubmit} initialValues={selectedRoom.players[profileUid]} />
      )}
    </FormDialog>
  );
}
