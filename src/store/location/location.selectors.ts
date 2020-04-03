import { AppState } from '../main';
import { LocationMatch } from './location.model';

export const locationSelectors = {
  match: (state: AppState): LocationMatch => state.location.match,
};
