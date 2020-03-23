import { call, put } from 'redux-saga/effects';

import { api } from '../../services/api';
import { requestLondonSuccess, requestLondonFailure } from './actions';

export function* londonRequestGenerator(action) {
  const { codeCity } = action;
  try {
    const response = yield call(api.get, codeCity);
    yield put(requestLondonSuccess(response.data));
  } catch (err) {
    yield put(requestLondonFailure(err));
  }
}
