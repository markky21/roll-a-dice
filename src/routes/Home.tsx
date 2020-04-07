import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../App.css';
import { locationActions } from '../store/location/location.actions';
import { LocationMatch } from '../store/location/location.model';
import { locationSelectors } from '../store/location/location.selectors';

// const styles = (theme: Theme) => ({});

// const useStyles = makeStyles(styles);

export interface HomeProps {
  match: LocationMatch;
}

export function HomeC(props: HomeProps) {
  // const classes = useStyles();

  const { match } = props;
  const dispatch = useDispatch();
  const storeLocationMatch = useSelector(locationSelectors.match);

  useEffect(() => {
    if (JSON.stringify(match) !== JSON.stringify(storeLocationMatch)) {
      dispatch(locationActions.matchChange(match));
    }
  });

  return <div>Henlooo</div>;
}

export const Home = {
  path: '/',
  component: HomeC,
};
