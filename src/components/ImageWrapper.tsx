import React from 'react';
import { CardMedia, Collapse, createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = createStyles({
  image: {
    width: '100%',
    height: '25vh',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
  },
});

interface ImageWrapperProps {
  src: string;
  title: string;
}

const useStyles = makeStyles(styles);

function ImageWrapperC(props: ImageWrapperProps) {
  const { src = '', title } = props;
  const classes = useStyles();

  return (
    <Collapse in={src.length > 8}>{src && <CardMedia className={classes.image} image={src} title={title} />}</Collapse>
  );
}
export const ImageWrapper = React.memo(ImageWrapperC);
