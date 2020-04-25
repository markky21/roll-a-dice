import React from 'react';
import { Button, DialogActions, DialogContent } from '@material-ui/core';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { useSelector } from 'react-redux';

import { FormFieldText } from '../../../components/FormComponents';
import { ImageWrapper } from '../../../components/ImageWrapper';
import { mainSelectors } from '../../../store/main.selectors';
import { playersCharacterFormModel } from '../../../models/rooms.model';

const validate = (values: any) => {
  const errors: any = {};

  Object.keys(playersCharacterFormModel).forEach(fieldKey => {
    if (
      playersCharacterFormModel[fieldKey].maxLength &&
      values[playersCharacterFormModel[fieldKey].name]?.length > playersCharacterFormModel[fieldKey].maxLength
    ) {
      errors[fieldKey] = `Max length ${playersCharacterFormModel[fieldKey].maxLength} exceeded`;
    }
  });

  return errors;
};

interface PlayerProfileFormProps extends InjectedFormProps {
  onClose: () => void;
}

function PlayerProfileFormC(props: PlayerProfileFormProps) {
  const { handleSubmit, pristine, submitting, onClose, invalid } = props;
  const form = useSelector(mainSelectors.getFormPlayerProfile$);

  return (
    <form onSubmit={handleSubmit}>
      <ImageWrapper src={form.characterAvatarUrl} title="Character image" />
      <DialogContent dividers>
        <FormFieldText {...playersCharacterFormModel.characterName} />
        <FormFieldText {...playersCharacterFormModel.characterAvatarUrl} />
        <FormFieldText {...playersCharacterFormModel.characterDescription} />
        <FormFieldText {...playersCharacterFormModel.notes} />
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

export const PlayerProfileForm = reduxForm({
  form: 'playerProfile',
  validate,
})(PlayerProfileFormC as any) as any;
