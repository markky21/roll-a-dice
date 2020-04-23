import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Dialog, DialogTitle, useMediaQuery } from '@material-ui/core';

export interface FormDialogProps<T> {
  open: boolean;
  onClose: () => void;
  title: string;
  children: any;
}

export function FormDialog<T = any>(props: FormDialogProps<T>) {
  const { open, onClose, children = [], title } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={onClose} aria-labelledby="responsive-dialog-title">
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
}
