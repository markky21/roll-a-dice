import React from 'react';
import { RouteProps } from 'react-router';

import { RouterPath } from '../../models/paths';

// @ts-ignore
const RoomLazy = React.lazy(() => import('./RoomPage'));

export const Room: RouteProps = {
  path: [RouterPath.ROOMS_PATH_ID],
  component: RoomLazy as React.ComponentClass,
};
