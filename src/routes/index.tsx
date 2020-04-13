import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { CoreLayout } from '../layouts/CoreLayout';
import { Home } from './Home';
import { RoomList } from './RoomList';
import { ChatList } from './ChatList';
import { Room } from './Room';
import { Loader } from '../components/Loader';

export function createRoutes() {
  return (
    <CoreLayout>
      <Suspense fallback={<Loader style={{ backgroundColor: 'transparent' }} />}>
        <Switch>
          <Route exact path={Home.path} component={Home.component} />

          {[RoomList, Room, ChatList].map((settings, index) => (
            <Route key={`Route-${index}`} {...settings} />
          ))}

          {/*<Route component={NotFoundRoute.component} />* // TODO to implement */}
        </Switch>
      </Suspense>
    </CoreLayout>
  );
}
