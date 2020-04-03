import { Reducer } from 'redux';
import { LocationAction, LocationState } from './location.model';

export const initialState: LocationState = {
  match: {
    params: {},
    isExact: false,
    path: '',
    url: '',
  },
};

export const locationReducer: Reducer<LocationState> = (state: LocationState = initialState, action) => {
  switch (action.type) {
    case LocationAction.MATCH_CHANGE: {
      return { ...state, match: action.payload };
    }
    default: {
      return state;
    }
  }
};
