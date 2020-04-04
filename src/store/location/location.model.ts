import { RouterPath } from '../../models/paths';

export enum LocationAction {
  MATCH_CHANGE = '@@location/MATCH_CHANGE',
}

export interface LocationMatch<Params extends { [K in keyof Params]?: string } = {}> {
  params: Params;
  isExact: boolean;
  path: RouterPath | string;
  url: string;
}

export interface LocationState {
  readonly match: LocationMatch;
}
