import React from 'react';
import { CardMedia, Collapse, createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import { mainSelectors } from '../../../store/main.selectors';

interface RoomCreateImageProps {}

const styles = createStyles({
  image: {
    width: '100%',
    height: '15vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
});

const useStyles = makeStyles(styles);

export function RoomCreateImage(props: RoomCreateImageProps) {
  const classes = useStyles();
  const form = useSelector(mainSelectors.getFormCreateRoom);

  return (
    <Collapse in={form?.roomImage?.length > 8}>
      {form?.roomImage && (
        <CardMedia
          className={classes.image}
          image={form?.roomImage}
          title="Room Image"
        />
      )}
    </Collapse>
  );
}
