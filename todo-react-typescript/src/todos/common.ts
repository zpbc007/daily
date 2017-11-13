/**
 * Action接口
 */
export interface Action {
    id: number
    type: number
    [propName: string]: any
}

/**
 * todo列表项
 */
export class TodoItem {
    id: number
    completed: boolean
    text: string
    constructor (id: number, completed: boolean, text: string) {
        this.id = id
        this.completed = completed
        this.text = text
    }
}