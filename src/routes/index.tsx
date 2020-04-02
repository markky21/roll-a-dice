import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CoreLayout } from '../layouts/CoreLayout/CoreLayout';
import { Home } from './Home';
import { CreatRoom } from './CreateRoom';
import { RoomList } from './RoomList';

export function createRoutes() {
  return (
    <CoreLayout>
      <Switch>
        <Route exact path={Home.path} component={Home.component} />

        {[CreatRoom, RoomList].map((settings, index) => (
          <Route key={`Route-${index}`} {...settings} />
        ))}

        {/*<Route component={NotFoundRoute.component} />*/}
      </Switch>
    </CoreLayout>
  );
}
