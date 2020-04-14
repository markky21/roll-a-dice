import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { createRoomFormModel } from '../../../models/rooms.model';
import { Dice } from '../../../models/dice.model';
import { FormFieldSlider } from '../../../components/FormComponents';

const styles = (theme: Theme) => ({
  inputSlider: {
    width: '100%',
    marginLeft: theme.spacing(0),
    paddingRight: theme.spacing(2),
    minWidth: theme.spacing(40),
  },
});

interface DiceDashboardFormProps extends InjectedFormProps {
  diceType: Dice[];
}

const useStyles = makeStyles(styles);

function DiceDashboardFormC(props: DiceDashboardFormProps) {
  const { diceType } = props;
  const classes = useStyles();
  return (
    <form onSubmit={(e: any) => e.preventDefault()}>
      <h2>Set your dices!</h2>

      <div className={classes.inputSlider}>
        {diceType?.map(dice => (
          <FormFieldSlider key={dice} {...(createRoomFormModel[dice] as any)} />
        ))}
      </div>
    </form>
  );
}
export const DiceDashboardForm = React.memo(
  reduxForm({
    form: 'diceSetForm',
    initialValues: {
      [Dice.D4]: 0,
      [Dice.D6]: 0,
      [Dice.D8]: 0,
      [Dice.D10]: 0,
      [Dice.D12]: 0,
      [Dice.D20]: 0,
      [Dice.D100]: 0,
    },
  })(DiceDashboardFormC as any) as any
);
