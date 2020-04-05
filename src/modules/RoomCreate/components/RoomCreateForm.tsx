import React from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import CheckboxGroup, {
  renderCheckbox,
  renderCheckboxGroup,
  renderSelectField,
  renderTextField,
} from '../../../components/FormComponents';
import { FormGroup } from '@material-ui/core';

export interface RoomCreateFormProps extends InjectedFormProps {
  handleSubmit: any;
}
const validate = (values: any) => {
  const errors: any = {};
  const requiredFields = ['firstName', 'lastName', 'email', 'favoriteColor', 'notes'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

function RoomCreateFormC(props: RoomCreateFormProps) {
  const { handleSubmit, pristine, reset, submitting } = props;

  const options = [
    { label: 'English', value: 'en' },
    { label: '繁體中文', value: 'zh-TW' },
    { label: 'Tibetan', value: 'bo' },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="roomName" component={renderTextField} label="Room name" />
      </div>
      {/*<FormGroup>*/}
      {/*  <Field name="diceType" component={renderCheckboxGroup} label="D4" />*/}
      {/*</FormGroup>*/}
      <CheckboxGroup name={'langs'} options={options} />
      <div />
      <div>
        <Field name="notes" component={renderTextField} label="Notes" multiline rowsMax="4" margin="normal" />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
}

export const RoomCreateForm = reduxForm({
  form: 'createRoom',
  validate,
})(RoomCreateFormC);
