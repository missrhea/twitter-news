import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';

import tweetLocations from './tweets'
import geoData from './geo'

const reducer = combineReducers({
    tweetLocations,
    geoData
});


const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    // createLogger()
  )
);

export default store;

export * from './geo'
export * from './tweets'