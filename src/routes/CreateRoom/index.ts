import { RouterPath } from '../../constants/paths';
import { CreatRoomPage } from './CreateRoomPage';
import React from 'react';
import { RouteProps } from 'react-router';

export const CreatRoom: RouteProps = {
  path: RouterPath.CREATE_ROOM_PATH,
  component: CreatRoomPage as React.ComponentClass,
};
