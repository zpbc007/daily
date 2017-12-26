import {combineReducers} from 'redux'

import counter from '@redux/reducers/counter'
import userInfo from '@redux/reducers/userInfo'

export default combineReducers({
    counter,
    userInfo
})