import React from 'react';
import { Button, DialogActions, DialogContent } from '@material-ui/core';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { createRoomFormModel } from '../../../models/rooms.model';
import { FormFieldCheckboxGroup, FormFieldText } from '../../../components/FormComponents';

interface RoomCreateFormProps extends InjectedFormProps {
  handleClose: () => void;
}

const validate = (values: any) => {
  const errors: any = {};

  [createRoomFormModel.roomName.name].forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (!(values[createRoomFormModel.diceType.name] && values[createRoomFormModel.diceType.name].length)) {
    errors[createRoomFormModel.diceType.name] = 'Select at least one dice';
  }
  return errors;
};

function RoomCreateFormC(props: RoomCreateFormProps) {
  const { handleSubmit, pristine, submitting, handleClose, invalid } = props;

  return (
    <form onSubmit={handleSubmit}>
      <DialogContent dividers>
        <div>
          <FormFieldText {...createRoomFormModel.roomName} />
        </div>

        <div>
          <FormFieldText {...createRoomFormModel.description} />
        </div>
        <div>
          <FormFieldCheckboxGroup {...createRoomFormModel.diceType} />
        </div>
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
