import { applyMiddleware, createStore } from 'redux';

// Logger middleware help us to see which action is being called and how state is getting changed.
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer.js';


let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
