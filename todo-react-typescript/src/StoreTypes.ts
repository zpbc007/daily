/**
 * 此文件用来定义该组件在store中存储的数据结构
 */
export interface TodoState {
    id: number,
    text: string,
    completed: boolean
}

export type FilterState = string

export default interface StoreState {
    todos: TodoState[],
    filter: FilterState
}