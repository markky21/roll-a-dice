import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Dialog, DialogTitle, useMediaQuery } from '@material-ui/core';
import { RoomCreateForm } from './components/RoomCreateForm';

import { IRoomCreateForm } from '../../models/rooms.model';

export interface RoomCreateProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (formValues: IRoomCreateForm) => void;
  initialValues?: IRoomCreateForm;
}

export function RoomCreate(props: RoomCreateProps) {
  const { open, onClose, onSubmit, initialValues } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={onClose} aria-labelledby="responsive-dialog-title">
      <DialogTitle>Create new Room</DialogTitle>
      <RoomCreateForm handleClose={onClose} onSubmit={onSubmit} initialValues={initialValues} />
    </Dialog>
  );
}
