import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import watchSagas from './configureSaga';
import londonReducer from './london/reducer';

const globalState = combineReducers({
  londonState: londonReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});
const store = createStore(globalState, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchSagas);

export default store;
