import * as React from 'react'
import { connect } from 'react-redux'

import TodoItem from './todoItem'
import { toggleTodo, removeTodo } from '../actions'
import StoreState, { TodoState, FilterState } from '../../StoreTypes'
import { FilterTypes } from '../../constants'

const TodoList = ({todos, onToggleTodo, onRemoveTodo}: 
                    {
                      todos: TodoState[], 
                      onToggleTodo: (id: number) => void, 
                      onRemoveTodo: (id: number) => void
                    }
                ) => {
    return (
        <ul className="todo-list">
            {
                todos.map((item) => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggle={() => onToggleTodo(item.id)}
                        onRemove={() => {onRemoveTodo(item.id)}}
                    />
                ))
            }
        </ul>
    )
}

const selectVisibleTodos = (todos: TodoState[], filter: FilterState): TodoState[] => {
    switch (filter) {
        case FilterTypes.ALL:
            return todos
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed)
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed)
        default:
            throw new Error('unsupported filter')
    }
}

const mapStateToProps = (state: StoreState) => {
    return {
        todos: selectVisibleTodos(state.todos, state.filter)
    }
}

const mapDispatchToProps = {
    onToggleTodo: toggleTodo,
    onRemoveTodo: removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)