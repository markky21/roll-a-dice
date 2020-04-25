import { AppState } from '../main';
import { createSelector } from 'reselect';

export const uiSelectors = {
  isPending$: createSelector(
    (state: AppState) => state.ui.isPending,
    isPending => isPending
  ),
};
