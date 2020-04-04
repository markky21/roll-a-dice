import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import styles from './LoadingSpinner.styles';

const useStyles = makeStyles(styles);

function LoadingSpinner({ size }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.progress}>
        <div
          dangerouslySetInnerHTML={{
            __html: `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block;" width="80" height="80" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <g transform="translate(50 42)">
        <g transform="scale(0.8)">
            <g transform="translate(-50 -50)">
                <polygon fill="#9b9c20" points="72.5 50 50 11 27.5 50 50 50" transform="rotate(86.7708 50 38.5)">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="5s" values="0 50 38.5;360 50 38.5" keyTimes="0;1"></animateTransform>
                </polygon>
                <polygon fill="#be8b02" points="5 89 50 89 27.5 50" transform="rotate(86.7708 27.5 77.5)">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="5s" values="0 27.5 77.5;360 27.5 77.5" keyTimes="0;1"></animateTransform>
                </polygon>
                <polygon fill="#ccc99a" points="72.5 50 50 89 95 89" transform="rotate(86.7708 72.3795 77.5)">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="5s" values="0 72.5 77.5;360 72 77.5" keyTimes="0;1"></animateTransform>
                </polygon>
            </g>
        </g>
    </g>
</svg>
`,
          }}
        />
      </div>
    </div>
  );
}

LoadingSpinner.propTypes = {
  size: PropTypes.number,
};

export default LoadingSpinner;
