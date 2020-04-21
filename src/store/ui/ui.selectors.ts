import { AppState } from '../main';

export const uiSelectors = {
  isPending: (state: AppState): boolean => state.ui.isPending,
};
