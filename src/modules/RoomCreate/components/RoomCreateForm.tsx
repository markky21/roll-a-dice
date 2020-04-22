import React from 'react';
import { Button, DialogActions, DialogContent } from '@material-ui/core';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { useSelector } from 'react-redux';

import { createRoomFormModel } from '../../../models/rooms.model';
import { FormFieldCheckboxGroup, FormFieldText } from '../../../components/FormComponents';
import { ImageWrapper } from '../../../components/ImageWrapper';
import { mainSelectors } from '../../../store/main.selectors';

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
  onClose: () => void;
}

function RoomCreateFormC(props: RoomCreateFormProps) {
  const { handleSubmit, pristine, submitting, onClose, invalid } = props;
  const form = useSelector(mainSelectors.getFormCreateRoom);

  return (
    <form onSubmit={handleSubmit}>
      <ImageWrapper src={form?.roomImage} title="Room image" />

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
        <Button type="button" onClick={onClose} color="primary">
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
