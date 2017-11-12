import { actionTypes } from './actionTypes'

let nextTodoId: number = 0

class action {
    id: number
    type: number
    constructor (id: number, type: number) {
        this.id = id
        this.type = type
    }
}

class addTodo extends action {
    constructor (id: number, type: number, text: string) {
        super(id, type)
        this.text = text
    }
    text: string
}

export const addTodoAction = (text: string) => (
    new addTodo(nextTodoId ++, actionTypes.ADD_TODO, text)
 )

export const toggleTodo = (id: string) => ({
    type: actionTypes.TOGGLE_TODO,
    id: id
})

export const removeTodo = (id: string) => ({
    type: actionTypes.REMOVE_TODO,
    id: id
})
