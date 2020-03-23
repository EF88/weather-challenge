import { call, put } from 'redux-saga/effects';

import { api } from '../../services/api';
import { requestCitySuccess, requestCityFailure } from './actions';

export function* cityRequestGenerator(action) {
  const { codeCity } = action;
  try {
    const response = yield call(api.get, codeCity);
    yield put(requestCitySuccess(response.data));
  } catch (err) {
    yield put(requestCityFailure(err));
  }
}
