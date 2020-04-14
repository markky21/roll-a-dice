import React from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({});
type extend = WithStyles<typeof styles>;

export interface ISpeedDialAction {
  icon: React.ReactElement;
  name: string;
  callback?: (callback: () => void) => void;
}

interface SpeedDialCProps extends extend {
  direction?: 'up' | 'down' | 'left' | 'right';
  actions: ISpeedDialAction[];
}

function SpeedDialC(props: SpeedDialCProps) {
  const { direction = 'left', actions } = props;

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction={direction}
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => (action.callback ? action.callback(handleClose) : handleClose())}
        />
      ))}
    </SpeedDial>
  );
}

export const SpeedDialWrapper =  React.memo(withStyles(styles)(SpeedDialC));
