import clsx from 'clsx';
import React from 'react';

import { DiceCard } from '../../../modules/DiceCard/DiceCard';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { DiceServiceContextC } from '../../../contexts/DiceService.context';
import { useSelector } from 'react-redux';
import { DiceDashboard } from '../../../modules/DiceDashboard/DiceDashbard';
import { roomsSelectors } from '../../../store/rooms/rooms.selectors';
import { IRoom } from '../../../models/rooms.model';
import { Dice } from '../../../models/dice.model';
import { AppStats } from '../../../modules/AppStats/AppStats';

const styles = (theme: Theme) => ({
  root: {
    position: 'relative' as 'relative',
    margin: theme.spacing(-6, -2),
    height: `calc(100% + ${theme.spacing(12)}px)`,
  },
  cssGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto 1fr',
    rowGap: `${theme.spacing(2)}px`,
    columnGap: `${theme.spacing(2)}px`,
  },
  cssItem1: {
    gridColumn: 1,
    gridRow: 1,
  },
  cssItem2: {
    gridColumn: 1,
    gridRow: 2,
  },
  mainInfoCard: {},
  diceCard: {},
  diceDashboard: {
    position: 'fixed' as 'fixed',
    zIndex: 1000,
    bottom: theme.spacing(8),
    right: theme.spacing(3),
  },
});

const useStyles = makeStyles(styles);

interface HomeWrapperProps {}

const room: Partial<IRoom> = {
  diceType: [Dice.D4, Dice.D6, Dice.D8, Dice.D10, Dice.D12, Dice.D20, Dice.D100],
  gameMasterAvatar: `${process.env.PUBLIC_URL}/assets/images/avatar-1.jpg`,
};

export function HomeWrapper(props: HomeWrapperProps) {
  const classes = useStyles();
  const diceRolling = useSelector(roomsSelectors.diceRolling);

  return (
    <div className={clsx(classes.root, classes.cssGrid)}>
      <section className={clsx(classes.mainInfoCard, classes.cssGrid)}>
        <AppStats />
      </section>

      <DiceServiceContextC>
        <nav className={classes.diceDashboard}>
          <DiceDashboard visible={!diceRolling} room={room as IRoom} />
        </nav>

        <section className={classes.diceCard}>
          <DiceCard />
        </section>
      </DiceServiceContextC>
    </div>
  );
}
