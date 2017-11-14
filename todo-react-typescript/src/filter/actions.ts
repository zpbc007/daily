import { ActionTypes } from './actionTypes'

export interface SetFilter {
    type: string
    filter: string
}

export const setFilter = (filterType: string): SetFilter => (
    {
        type: ActionTypes.SET_FILTER,
        filter: filterType
    }
)
