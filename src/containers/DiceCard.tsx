import React, { useEffect, useRef } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    diceCanvas: { width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 },
  });

interface DiceCardProps extends WithStyles<typeof styles> {}

function DiceCardC(props: DiceCardProps) {
  const { classes } = props;

  const diceContainerEl = useRef(null);

  useEffect(() => {
    (window as any).dice_initialize(diceContainerEl.current);
  }, []);

  return (
    <React.Fragment>
      <div id="diceCanvasContainer" ref={diceContainerEl} className={classes.diceCanvas}>
        <div id="canvas" />
        <div id="info_div" style={{ display: 'none', visibility: 'hidden' }}>
          <div className="center_field">
            <span id="label" />
          </div>
          <div className="center_field">
            <div className="bottom_field">
              <span id="labelhelp">click to continue or tap and drag again</span>
            </div>
          </div>
        </div>
        <div id="selector_div" style={{ display: 'none', visibility: 'hidden' }}>
          <div className="center_field">
            <div id="sethelp">
              choose your dice set by clicking the dices or by direct input of notation,
              <br />
              tap and drag on free space of screen or hit throw button to roll
            </div>
          </div>
          <div className="center_field">
            <input type="text" id="set" value="14d10" onChange={e => console.log(e)} />
            <br />
            <button id="clear">clear</button>
            <button id="throw">throw</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export const DiceCard = withStyles(styles)(DiceCardC);
