import { actionTypes } from './actionTypes'

let nextTodoId: number = 0

export const addTodo = (text: string) => ({
    type: actionTypes.ADD_TODO,
    completed: false,
    id: nextTodoId ++,
    text: text
})

export const toggleTodo = (id: string) => ({
    type: actionTypes.TOGGLE_TODO,
    id: id
})
