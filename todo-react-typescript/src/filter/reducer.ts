import { ActionTypes } from './actionTypes'
import { Action } from './common'
import { FilterTypes } from '../constants'

export default (state: string = FilterTypes.ALL, action: Action): string => {
    switch (action.type) {
        case ActionTypes.SET_FILTER:
            return action.filter
        default:
            return state
    }
}