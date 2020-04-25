import React from 'react';
import { useSelector } from 'react-redux';

import { WhenAuthenticated } from './WhenAuthenticated';
import { firebaseSelectors } from '../store/firebase/firebase.selectors';

interface CoreProps {
  children: React.ReactElement;
}

export function Core(props: CoreProps) {
  const isAuthenticated = useSelector(firebaseSelectors.isAuthenticated$);

  return (
    <React.Fragment>
      {isAuthenticated && <WhenAuthenticated />}
      {props.children}
    </React.Fragment>
  );
}
