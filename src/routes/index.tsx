import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CoreLayout } from '../layouts/CoreLayout';
import { Home } from './Home';
import { RoomList } from './RoomList';
import { ChatList } from './ChatList';
import { Room } from './Room';

export function createRoutes() {
  return (
    <CoreLayout>
      <Switch>
        <Route exact path={Home.path} component={Home.component} />

        {[RoomList, Room, ChatList].map((settings, index) => (
          <Route key={`Route-${index}`} {...settings} />
        ))}

        {/*<Route component={NotFoundRoute.component} />* // TODO to implement */}
      </Switch>
    </CoreLayout>
  );
}
