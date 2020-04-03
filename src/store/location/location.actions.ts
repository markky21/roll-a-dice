import { action } from 'typesafe-actions';

import { LocationAction, LocationMatch } from './location.model';

export const locationActions = {
  matchChange: (payload: LocationMatch) => action(LocationAction.MATCH_CHANGE, payload),
};
