import { takeLatest, all } from 'redux-saga/effects';
import { CityTypes } from './cities/types';
import { cityRequestGenerator } from './cities/saga';

export default function* watchSagas() {
  return yield all([takeLatest(CityTypes.CITY_REQUEST, cityRequestGenerator)]);
}
