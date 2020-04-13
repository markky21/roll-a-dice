import React from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  InputLabel,
  Select,
  Slider,
  TextField,
} from '@material-ui/core';
import { Field } from 'redux-form';
import { makeStyles, Theme } from '@material-ui/core/styles';

/*
 * Model
 */
interface FormFieldGenericProps<T = any> {
  name: string;
  label: string;
  value?: T;
  [key: string]: any;
}
export interface IGroupOption {
  label: string;
  value: string | number;
}

interface FormFieldWithOptionsProps extends FormFieldGenericProps {
  options: IGroupOption[];
}

/*
 * Styles
 */

const styles = (theme: Theme) => ({
  formField: { marginBottom: '16px' },
});

const useStyles = makeStyles(styles);

/*
 * Components
 */

export const FormFieldHelperText = ({ touched, error }: any) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

export const FormFieldText = (props: FormFieldGenericProps) => {
  const classes = useStyles();

  const formField = ({ label, input, meta: { touched, invalid, error }, ...custom }: any) => (
    <TextField
      variant="outlined"
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );

  return <Field {...props} component={formField} className={classes.formField} />;
};

export const FormFieldSelect = (props: FormFieldGenericProps) => {
  const classes = useStyles();

  const field = ({ input, label, meta: { touched, error }, children, ...custom }: FormFieldGenericProps) => {
    return (
      <FormControl error={touched && error}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          variant="outlined"
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
        {FormFieldHelperText({ touched, error })}
      </FormControl>
    );
  };

  return <Field {...props} type="checkbox" component={field} className={classes.formField} />;
};

export const FormFieldCheckbox = (props: FormFieldGenericProps) => {
  const classes = useStyles();

  const field = ({ input, label }: FormFieldGenericProps) => {
    return <FormControlLabel control={<Checkbox checked={!!input.value} onChange={input.onChange} />} label={label} />;
  };

  return <Field {...props} type="checkbox" component={field} className={classes.formField} />;
};

export const FormFieldCheckboxGroup = (props: FormFieldWithOptionsProps) => {
  const classes = useStyles();

  const field = ({ input, meta, options, label }: FormFieldWithOptionsProps) => {
    const { name, onChange } = input;
    const { touched, error } = meta;
    const inputValue = input.value;

    const checkboxesFormControls = options.map(({ label, value }: any, index: number) => {
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
      <FormControl error={touched && !!error} component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <FormGroup row>{checkboxesFormControls}</FormGroup>
        {FormFieldHelperText({ touched, error })}
      </FormControl>
    );
  };

  return <Field {...props} type="checkbox" component={field} className={classes.formField} />;
};

export const FormFieldDiceSpinner = (props: FormFieldGenericProps) => {
  const classes = useStyles();

  function valuetext(value: number) {
    return `${value}`;
  }

  const formField = ({ label, input, meta: { touched, invalid, error }, ...custom }: any) => (
    <React.Fragment>
      <FormControlLabel
        control={
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="number-of-dices"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={16}
          />
        }
        label={label}
      />
    </React.Fragment>
  );

  return <Field {...props} component={formField} className={classes.formField} />;
};