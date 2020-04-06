import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { createBrowserHistory } from 'history';
import { RouterPath } from '../models/paths';

import { AppState } from '../store/main';
import { firebaseSelectors } from '../store/firebase/firebase.selectors';
import { Loader } from '../components/Loader';

const locationHelper = locationHelperBuilder({});
const history = createBrowserHistory();

const AUTHED_REDIRECT = 'AUTHED_REDIRECT';
const UNAUTHED_REDIRECT = 'UNAUTHED_REDIRECT';

/**
 * Higher Order Component that redirects to `/login` instead
 * rendering if user is not authenticated (default of redux-auth-wrapper).
 * @param {Component} componentToWrap - Component to wrap
 * @return {Component} wrappedComponent
 */
export const UserIsAuthenticated = connectedRouterRedirect({
  redirectPath: RouterPath.HOME_PATH,
  AuthenticatingComponent: Loader,
  wrapperDisplayName: 'UserIsAuthenticated',
  // Want to redirect the user when they are done loading and authenticated
  authenticatedSelector: firebaseSelectors.authenticatedSelector,
  authenticatingSelector: firebaseSelectors.authenticatingSelector,
  redirectAction: ((newLoc: any) => (dispatch: any) => {
    // Use push, replace, and go to navigate around.
    history.push(newLoc);
    dispatch({
      type: UNAUTHED_REDIRECT,
      payload: { message: 'User is not authenticated.' },
    });
  }) as any,
});

/**
 * Higher Order Component that redirects to listings page or most
 * recent route instead rendering if user is not authenticated. This is useful
 * routes that should not be displayed if a user is logged in, such as the
 * login route.
 * @param {Component} componentToWrap - Component to wrap
 * @return {Component} wrappedComponent
 */
export const UserIsNotAuthenticated = connectedRouterRedirect({
  AuthenticatingComponent: Loader,
  wrapperDisplayName: 'UserIsNotAuthenticated',
  allowRedirectBack: false,
  // Want to redirect the user when they are done loading and authenticated
  authenticatedSelector: (state: AppState) => {
    const {
      firebase: { auth },
    } = state;
    return auth.isEmpty;
  },
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) => !auth.isLoaded || isInitializing,
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || RouterPath.ROOMS_PATH,
  redirectAction: ((newLoc: any) => (dispatch: any) => {
    // Use push, replace, and go to navigate around.
    history.push(newLoc);
    dispatch({
      type: AUTHED_REDIRECT,
      payload: { message: 'User is not authenticated.' },
    });
  }) as any,
});

/*
/!**
 * Render children based on route config objects
 * @param {Array} routes - Routes settings array
 * @param {Object} match - Routes settings array
 * @param {Object} parentProps - Props to pass to children from parent
 *!/
export function renderChildren(routes, match, parentProps) {
  return routes.map(route => (
    <Route
      key={`${match.url}-${route.path}`}
      path={`${match.url}/${route.path}`}
      render={props => <route.component {...parentProps} {...props} />}
    />
  ));
}*/
