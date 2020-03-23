import { takeLatest, all } from 'redux-saga/effects';
import { LondonTypes } from './london/types';
import { londonRequestGenerator } from './london/saga';

export default function* watchSagas() {
  return yield all([takeLatest(LondonTypes.LONDON_REQUEST, londonRequestGenerator)]);
}
