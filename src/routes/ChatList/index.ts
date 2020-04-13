import React from 'react';
import { RouteProps } from 'react-router';

import { RouterPath } from '../../models/paths';

// @ts-ignore
const ChatListLazy = React.lazy(() => import('./ChatListPage'));

export const ChatList: RouteProps = {
  path: [RouterPath.CHATS_PATH_ID, RouterPath.CHATS_PATH],
  component: ChatListLazy as React.ComponentClass,
};
