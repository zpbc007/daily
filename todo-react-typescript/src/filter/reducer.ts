import { ActionTypes } from './actionTypes'
import { SetFilter } from './actions'
import { FilterTypes } from '../constants'
import { FilterState } from '../StoreTypes'

export default (state: string = FilterTypes.ALL, action: SetFilter): FilterState => {
    switch (action.type) {
        case ActionTypes.SET_FILTER:
            return action.filter
        default:
            return state
    }
}