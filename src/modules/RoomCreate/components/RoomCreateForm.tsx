import React from 'react';
import { Button, DialogActions, DialogContent } from '@material-ui/core';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { createRoomFormModel } from '../../../models/rooms.model';
import { FormFieldCheckboxGroup, FormFieldText } from '../../../components/FormComponents';
import { RoomCreateImage } from './RoomCreateImage';

const validate = (values: any) => {
  const errors: any = {};

  [createRoomFormModel.roomName.name, createRoomFormModel.maxPlayers.name].forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (!(values[createRoomFormModel.diceType.name] && values[createRoomFormModel.diceType.name].length)) {
    errors[createRoomFormModel.diceType.name] = 'Select at least one dice';
  }
  return errors;
};

interface RoomCreateFormProps extends InjectedFormProps {
  handleClose: () => void;
}

function RoomCreateFormC(props: RoomCreateFormProps) {
  const { handleSubmit, pristine, submitting, handleClose, invalid } = props;

  return (
    <form onSubmit={handleSubmit}>
      <RoomCreateImage />
      <DialogContent dividers>
        <FormFieldText {...createRoomFormModel.roomName} />
        <FormFieldText {...createRoomFormModel.roomImage} />
        <FormFieldText {...createRoomFormModel.campaignTitle} />
        <FormFieldText {...createRoomFormModel.description} />
        <FormFieldText {...createRoomFormModel.gameMasterAvatar} />
        <div style={{ width: '50%' }}>
          <FormFieldText {...createRoomFormModel.maxPlayers} />
        </div>
        <FormFieldCheckboxGroup {...createRoomFormModel.diceType} />
      </DialogContent>
      <DialogActions>
        <Button type="submit" color="primary" disabled={invalid || pristine || submitting}>
          Submit
        </Button>
        <Button type="button" onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </form>
  );
}

export const RoomCreateForm = reduxForm({
  form: 'createRoom',
  validate,
})(RoomCreateFormC as any) as any;
