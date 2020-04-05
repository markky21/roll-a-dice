import React from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@material-ui/core';
import { Field, WrappedFieldProps } from 'redux-form';
import { StandardTextFieldProps } from '@material-ui/core/TextField/TextField';
import PropTypes from 'prop-types';

export const renderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom }: any) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

export const radioButton = ({ input, ...rest }: any) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  </FormControl>
);

export const renderFromHelper = ({ touched, error }: any) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

export const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }: any) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor="age-native-simple">Age</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: 'age',
        id: 'age-native-simple',
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

export const renderCheckbox = ({ input, label }: any) => (
  <FormControlLabel
    control={<Checkbox checked={input.value ? true : false} onChange={input.onChange} />}
    label={label}
  />
);

const onChangeCheckBoxGroup = (input: any, option: any) => (event: any) => {
  const newValue = [...input.value];
  if (event.target.checked) {
    newValue.push(option.name);
  } else {
    newValue.splice(newValue.indexOf(option.name), 1);
  }

  return input.onChange(newValue);
};

export interface IGroupOption {
  name: string;
  value: string | number;
}

export const renderCheckboxGroup = (
  props: WrappedFieldProps & StandardTextFieldProps & { options: IGroupOption[] }
) => {
  const {
    label,
    required,
    name,
    options,
    input,
    meta: { touched, error },
  } = props;
  return (
    <FormControl required={required} error={error} component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
        {options.map((option: any, index: number) => (
          <FormControlLabel
            label="Gilad Gray"
            control={
              <Checkbox
                checked={input.value.indexOf(option.name) !== -1}
                onChange={onChangeCheckBoxGroup(input, option)}
                name={`${name}[${index}]`}
              />
            }
          />
        ))}
      </FormGroup>
      {renderFromHelper({ touched, error })}
    </FormControl>
  );
};

export default class CheckboxGroup extends React.Component<any, any> {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  field = ({ input, meta, options }: any) => {
    const { name, onChange } = input;
    const { touched, error } = meta;
    const inputValue = input.value;

    const checkboxes = options.map(({ label, value }: any, index: number) => {
      const handleChange = (event: any) => {
        const arr = [...inputValue];
        if (event.target.checked) {
          arr.push(value);
        } else {
          arr.splice(arr.indexOf(value), 1);
        }
        return onChange(arr);
      };
      const checked = inputValue.includes(value);
      return (
        <FormControlLabel
          key={index}
          control={<Checkbox checked={checked} onChange={handleChange} name={`${name}[${index}]`} value={value} />}
          label={label}
        />
      );
    });

    return (
      <FormControl error={error} component="fieldset">
        <FormLabel component="legend">Here text</FormLabel>
        <FormGroup>{checkboxes}</FormGroup>
        {renderFromHelper({ touched, error })}
      </FormControl>
    );
  };

  render() {
    return <Field {...this.props} type="checkbox" component={this.field} />;
  }
}
