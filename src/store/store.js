import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import solarReducer from './solar/reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers({
  solar: solarReducer,
});

const store = createStore(combinedReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
