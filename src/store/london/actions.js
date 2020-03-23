import { action } from 'typesafe-actions';
import { LondonTypes } from './types';

export const requestLondon = () => action(LondonTypes.LONDON_REQUEST);
export const requestLondonSuccess = london =>
  action(LondonTypes.LONDON_SUCCESS, london);
export const requestLondonFailure = error =>
  action(LondonTypes.LONDON_FAILURE, error);
export const requestLondonFilter = filter =>
  action(LondonTypes.LONDON_FILTER, filter);
