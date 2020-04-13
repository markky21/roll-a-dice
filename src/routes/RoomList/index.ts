import React from 'react';
import { RouteProps } from 'react-router';

import { RouterPath } from '../../models/paths';

// @ts-ignore
const RoomListLazy = React.lazy(() => import('./RoomListPage'))


export const RoomList: RouteProps = {
  path: [RouterPath.ROOM_CREATE_PATH, RouterPath.ROOMS_PATH],
  component: RoomListLazy,
};
