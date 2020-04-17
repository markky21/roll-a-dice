import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../App.css';
import { HomeWrapper } from './components/HomeWrapper';
import { locationActions } from '../../store/location/location.actions';
import { LocationMatch } from '../../store/location/location.model';
import { locationSelectors } from '../../store/location/location.selectors';
import { useFirebaseConnect } from 'react-redux-firebase';
import { appQuery } from '../../queries/app.query';

export interface HomeProps {
  match: LocationMatch;
}

export function HomeC(props: HomeProps) {
  const { match } = props;
  const dispatch = useDispatch();
  const storeLocationMatch = useSelector(locationSelectors.match);

  useFirebaseConnect([appQuery.applicationStats]);

  useEffect(() => {
    if (JSON.stringify(match) !== JSON.stringify(storeLocationMatch)) {
      dispatch(locationActions.matchChange(match));
    }
  });

  return <HomeWrapper />;
}

export const HomePage = {
  path: '/',
  component: HomeC,
};
