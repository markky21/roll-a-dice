import React, { useEffect, useRef, useState } from 'react';

import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { locationSelectors } from '../store/location/location.selectors';
import { locationActions } from '../store/location/location.actions';
import { LocationMatch } from '../store/location/location.model';
import { makeStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  diceCanvas: { width: '100%', height: '100%' },
});

const useStyles = makeStyles(styles);

export interface HomeProps {
  match: LocationMatch;
}

export function HomeC(props: HomeProps) {
  const classes = useStyles();

  const { match } = props;
  const dispatch = useDispatch();
  const storeLocationMatch = useSelector(locationSelectors.match);

  const diceContainerEl = useRef(null);

  useEffect(() => {
    if (JSON.stringify(match) !== JSON.stringify(storeLocationMatch)) {
      dispatch(locationActions.matchChange(match));
    }
  });

  useEffect(() => {
    console.log(diceContainerEl.current);
    (window as any).dice_initialize(diceContainerEl.current);
  }, []);

  const [diceSetup] = useState('14d10');

  return (
    <div id="diceCanvasContainer" ref={diceContainerEl} className={classes.diceCanvas}>
      <div id="canvas"></div>
      <div id="info_div">
        <div className="center_field">
          <span id="label"></span>
        </div>
        <div className="center_field">
          <div className="bottom_field">
            <span id="labelhelp">click to continue or tap and drag again</span>
          </div>
        </div>
      </div>
      <div id="selector_div">
        <div className="center_field">
          <div id="sethelp">
            choose your dice set by clicking the dices or by direct input of notation,
            <br />
            tap and drag on free space of screen or hit throw button to roll
          </div>
        </div>
        <div className="center_field">
          <input type="text" id="set" value={diceSetup} />
          <br />
          <button id="clear">clear</button>
          <button id="throw">throw</button>
        </div>
      </div>
    </div>
  );
}

export const Home = {
  path: '/',
  component: HomeC,
};
