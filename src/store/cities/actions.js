import { action } from 'typesafe-actions';
import { CityTypes } from './types';

export const requestCity = () => action(CityTypes.CITY_REQUEST);
export const requestCitySuccess = city =>
  action(CityTypes.CITY_SUCCESS, city);
export const requestCityFailure = error =>
  action(CityTypes.CITY_FAILURE, error);
