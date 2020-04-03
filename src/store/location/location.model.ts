export enum LocationAction {
  MATCH_CHANGE = '@@location/MATCH_CHANGE',
}

export interface LocationMatch<Params extends { [K in keyof Params]?: string } = {}> {
  params: Params;
  isExact: boolean;
  path: string;
  url: string;
}

export interface LocationState {
  readonly match: LocationMatch;
}
