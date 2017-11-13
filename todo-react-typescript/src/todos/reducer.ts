import { ActionTypes } from './actionTypes'
import { Action, TodoItem } from './common'

export default (state: TodoItem[] = [], action: Action): TodoItem[] => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return [
                new TodoItem(action.id, false, action.text), 
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