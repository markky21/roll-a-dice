import React from 'react';
import { RouteProps } from 'react-router';

import { RouterPath } from '../../models/paths';
import { RoomPage } from './RoomPage';

export const Room: RouteProps = {
  path: [RouterPath.ROOMS_PATH_ID],
  component: RoomPage as React.ComponentClass,
};
