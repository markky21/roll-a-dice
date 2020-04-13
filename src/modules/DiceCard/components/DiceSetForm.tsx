import React from 'react';
import { Button, DialogActions, DialogContent } from '@material-ui/core';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { createRoomFormModel } from '../../../models/rooms.model';
import { FormFieldCheckboxGroup, FormFieldText } from '../../../components/FormComponents';

interface DiceSetFormProps extends InjectedFormProps {
  handleClose: () => void;
}

const validate = (values: any) => {
  const errors: any = {};

  if (!(values[createRoomFormModel.diceType.name] && values[createRoomFormModel.diceType.name].length)) {
    errors[createRoomFormModel.diceType.name] = 'Select at least one dice';
  }
  return errors;
};

function DiceSetFormC(props: DiceSetFormProps) {
  const { handleSubmit, pristine, submitting, handleClose, invalid } = props;

  return (
    <form onSubmit={handleSubmit}>
      <DialogContent dividers>
        <FormFieldText {...createRoomFormModel.roomName} />
        <FormFieldText {...createRoomFormModel.description} />
        <FormFieldCheckboxGroup {...createRoomFormModel.diceType} />
      </DialogContent>
    </form>
  );
}

export const DiceSetForm = reduxForm({
  form: 'diceSet',
  validate,
})(DiceSetFormC as any) as any;
