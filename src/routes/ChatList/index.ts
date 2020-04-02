import React from 'react';
import { RouteProps } from 'react-router';

import { RouterPath } from '../../models/paths';
import { ChatListPage } from './ChatListPage';

export const ChatList: RouteProps = {
  path: RouterPath.CHATS_PATH,
  component: ChatListPage as React.ComponentClass,
};
