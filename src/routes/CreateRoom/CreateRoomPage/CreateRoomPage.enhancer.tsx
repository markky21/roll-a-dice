import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { setDisplayName } from 'recompose';
import { UserIsAuthenticated } from '../../../utils/router';

export const enhancedCreateRoom = compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedCreateRoom'),
  // Add props.match
  withRouter,
  // Redirect to /login if user is not logged in
  UserIsAuthenticated
);
