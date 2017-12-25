import {createStore, applyMiddleware} from 'redux'
import combineReducers from 'reduxPath/reducers'

import promiseMiddleware from './middleware/promiseMiddleware'

let store = createStore(combineReducers, applyMiddleware(promiseMiddleware))

export default store