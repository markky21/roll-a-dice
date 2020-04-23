import { ReduxFirestoreQuerySetting } from 'react-redux-firebase';

export const profileQuery = {
  getProfilesByUid: (uids: string[] = []): ReduxFirestoreQuerySetting => ({
    collection: 'users',
    where: [['uid', 'in', uids]],
    storeAs: 'usersProfiles',
  }),
  connected: { path: '.info/connected', storeAs: 'connected' },
};
