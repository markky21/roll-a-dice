import { RouterPath } from '../../models/paths';
import { CreatRoomPage } from './CreateRoomPage';
import React from 'react';
import { RouteProps } from 'react-router';

export const CreatRoom: RouteProps = {
  path: RouterPath.ROOM_CREATE_PATH,
  component: CreatRoomPage as React.ComponentClass,
};
