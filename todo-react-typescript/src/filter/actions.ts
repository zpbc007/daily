import { ActionTypes } from './actionTypes'
import { Action } from './common'

export const setFilter = (filterType: string): Action => (
    new Action(ActionTypes.SET_FILTER, filterType)
)
