import React from 'react';
import { useSelector } from 'react-redux';

import { authenticatedSelector } from '../store/firebase/firebase.selectors';
import { WhenAuthenticated } from './WhenAuthenticated';

interface CoreProps {
  children: React.ReactElement;
}

export function Core(props: CoreProps) {
  const isAuthenticated = useSelector(authenticatedSelector);

  return (
    <React.Fragment>
      {isAuthenticated && <WhenAuthenticated />}
      {props.children}
    </React.Fragment>
  );
}
