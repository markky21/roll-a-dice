import React from 'react';
import { RouteProps } from 'react-router';

import { RouterPath } from '../../models/paths';
import { RoomListPage } from './RoomListPage';

export const RoomList: RouteProps = {
  path: RouterPath.ROOMS_PATH,
  component: RoomListPage as React.ComponentClass,
};
