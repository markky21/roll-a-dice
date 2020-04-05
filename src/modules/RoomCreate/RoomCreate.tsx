import React, { useEffect } from 'react';
import { createStyles, Theme, useTheme, withStyles, WithStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RouterPath } from '../../models/paths';
import { locationSelectors } from '../../store/location/location.selectors';
import { RoomCreateForm } from './components/RoomCreateForm';
import {IRoomCreateForm} from "../../models/rooms.model";

const styles = (theme: Theme) => createStyles({});

export interface RoomCreateProps extends WithStyles<typeof styles> {}

function RoomCreateC(props: RoomCreateProps) {
  const { classes } = props;

  const { path: locationPath } = useSelector(locationSelectors.match);

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const history = useHistory();

  const handleClose = () => {
    setOpen(false);
    history.push(RouterPath.ROOMS_PATH);
  };

  const submit = (values: IRoomCreateForm) => {
    // print the form values to the console
    console.log(values);
  };

  useEffect(() => {
    if (locationPath === RouterPath.ROOM_CREATE_PATH) {
      setOpen(true);
    }
  }, [locationPath]);

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
      <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
      <DialogContent dividers>
        {/*<DialogContentText>*/}
          <RoomCreateForm onSubmit={submit} />
        {/*</DialogContentText>*/}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Disagree
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export const RoomCreate = withStyles(styles)(RoomCreateC);
