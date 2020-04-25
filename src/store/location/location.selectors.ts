import { AppState } from '../main';
import { createSelector } from 'reselect';

export const locationSelectors = {
  match$: createSelector(
    (state: AppState) => state.location.match,
    match => match
  ),
};
