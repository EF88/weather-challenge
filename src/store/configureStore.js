import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import watchSagas from './configureSaga';
import cityReducer from './cities/reducer';

const globalState = combineReducers({
  cityState: cityReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});
const store = createStore(globalState, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchSagas);

export default store;
