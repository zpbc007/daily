import {createStore, applyMiddleware} from 'redux'
import combineReducers from 'reduxPath/reducers'

import promiseMiddleware from './middleware/promiseMiddleware'

let store = createStore(combineReducers, applyMiddleware(promiseMiddleware))

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextCombineReducers = require('./reducers').default
        store.replaceReducer(nextCombineReducers)
    })
}

export default store