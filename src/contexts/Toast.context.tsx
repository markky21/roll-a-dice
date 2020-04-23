import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export enum SnackbarType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
}

export interface SnackbarConfig {
  type: SnackbarType;
  open: boolean;
  text: string;
}

export type ToastContextProviderValue = {
  snackbarConfig: SnackbarConfig;
  setSnackbarConfig: (snackbarConfig: SnackbarConfig) => void;
};

export const ToastContext = React.createContext<ToastContextProviderValue>(null);

const styles = (theme: Theme) =>
  createStyles({
    snackbar: {
      top: theme.spacing(8),
    },
  });
const useStyles = makeStyles(styles);

export const ToastContextC: React.FC = ({ children }) => {
  const classes = useStyles();
  const [snackbarConfig, setSnackbarConfig] = React.useState<SnackbarConfig>(null);

  return (
    <ToastContext.Provider value={{ snackbarConfig, setSnackbarConfig }}>
      {children}
      <Snackbar
        className={classes.snackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={snackbarConfig?.open}
        autoHideDuration={6000}
        onClose={() => setSnackbarConfig({ ...snackbarConfig, open: false })}
      >
        <Alert
          variant="filled"
          onClose={() => setSnackbarConfig({ ...snackbarConfig, open: false })}
          severity={snackbarConfig?.type}
        >
          {snackbarConfig?.text}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};
