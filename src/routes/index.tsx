import React, { Suspense } from 'react';
import { Backdrop, createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';

import { ChatList } from './ChatList';
import { CoreLayout } from '../layouts/CoreLayout';
import { HomePage } from './Home/HomePage';
import { Room } from './Room';
import { RoomList } from './RoomList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  })
);

export function CreateRoutes() {
  const classes = useStyles();
  return (
    <CoreLayout>
      <Suspense fallback={<Backdrop className={classes.backdrop} open />}>
        <Switch>
          <Route exact path={HomePage.path} component={HomePage.component} />

          {[RoomList, Room, ChatList].map((settings, index) => (
            <Route key={`Route-${index}`} {...settings} />
          ))}

          {/*<Route component={NotFoundRoute.component} />* // TODO to implement */}
        </Switch>
      </Suspense>
    </CoreLayout>
  );
}
