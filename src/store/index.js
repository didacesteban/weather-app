import {applyMiddleware, createStore} from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import allReducers from '../reducers';

const middleware = applyMiddleware(promise(), thunk, createLogger())

export default createStore(allReducers, middleware);
