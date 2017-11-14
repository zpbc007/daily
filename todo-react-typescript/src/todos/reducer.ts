import { ActionTypes } from './actionTypes'
import { Action, AddTodo } from './actions'
import { TodoState } from '../StoreTypes'

export default (state: TodoState[] = [], action: Action): TodoState[] => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return [
                {
                    id: action.id,
                    completed: false,
                    text: (<AddTodo> action).text
                },
                ...state]
        case ActionTypes.TOGGLE_TODO:
            return state.map((todoItem) => {
                if (todoItem.id === action.id) {
                    return {...todoItem, completed: !todoItem.completed}
                } else {
                    return todoItem
                }
            })
        case ActionTypes.REMOVE_TODO:
            return state.filter((todoItem) => {
                return todoItem.id !== action.id                
            })
        default:
            return state
    }
}