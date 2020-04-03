import React, { useEffect } from 'react';

import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { locationSelectors } from '../store/location/location.selectors';
import { locationActions } from '../store/location/location.actions';
import { LocationMatch } from '../store/location/location.model';

export interface HomeProps {
  match: LocationMatch;
}

export function HomeC(props: HomeProps) {
  const { match } = props;
  const dispatch = useDispatch();
  const storeLocationMatch = useSelector(locationSelectors.match);

  useEffect(() => {
    if (JSON.stringify(match) !== JSON.stringify(storeLocationMatch)) {
      dispatch(locationActions.matchChange(match));
    }
  });

  return (
    <div className="Home">
      <header className="App-header">Hello!</header>
    </div>
  );
}

export const Home = {
  path: '/',
  component: HomeC,
};
