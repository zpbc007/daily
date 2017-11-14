import { ActionTypes } from './actionTypes'

let nextTodoId: number = 0

export interface AddTodo {
    id: number,
    type: ActionTypes,
    text: string
}

export interface ToggleTodo {
    id: number
    type: ActionTypes
}

export interface RemoveTodo {
    id: number
    type: ActionTypes
}

export type Action = AddTodo | ToggleTodo | RemoveTodo

export const addTodo = (text: string): AddTodo => (
    {
        id: nextTodoId ++,
        type: ActionTypes.ADD_TODO,
        text: text
    }
)

export const toggleTodo = (id: number): ToggleTodo => (
    {
        id: id,
        type: ActionTypes.TOGGLE_TODO
    }
)

export const removeTodo = (id: number): RemoveTodo => (
    {
        id: id,
        type: ActionTypes.REMOVE_TODO
    }
)
