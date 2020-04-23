import React from 'react';
import { RoomCreateForm } from './components/RoomCreateForm';

import { IRoomCreateForm } from '../../models/rooms.model';
import { FormDialog } from '../../components/FormDialog';
import { equal } from '../../utils/object.utils';

export interface RoomCreateProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (formValues: IRoomCreateForm) => void;
  initialValues?: IRoomCreateForm;
}

export function RoomCreateC(props: RoomCreateProps) {
  const { open, onClose, onSubmit, initialValues } = props;

  return (
    <FormDialog open={open} onClose={onClose} title="Create new room">
      <RoomCreateForm onClose={onClose} onSubmit={onSubmit} initialValues={initialValues} />
    </FormDialog>
  );
}

export const RoomCreate = React.memo(
  RoomCreateC,
  (prev, next) => equal(prev.initialValues, next.initialValues) && prev.open === next.open
);
