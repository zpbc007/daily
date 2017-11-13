import { ActionTypes } from './actionTypes'
import { Action } from './common'

let nextTodoId: number = 0

class ActionClass implements Action{
    id: number
    type: number
    constructor (id: number, type: number) {
        this.id = id
        this.type = type
    }
}

class addTodoClass extends ActionClass {
    constructor (id: number, type: number, text: string) {
        super(id, type)
        this.text = text
    }
    text: string
}

export const addTodo = (text: string): Action => (
    new addTodoClass(nextTodoId ++, ActionTypes.ADD_TODO, text)
 )

export const toggleTodo = (id: number): Action => (
    new ActionClass(id, ActionTypes.TOGGLE_TODO)
)

export const removeTodo = (id: number): Action => (
    new ActionClass(id, ActionTypes.REMOVE_TODO)
)
