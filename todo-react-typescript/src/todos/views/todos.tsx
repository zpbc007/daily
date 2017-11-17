import * as React from 'react'
import AddTodo from './addTodo'
import TodoList from './todoList'

import './style.css'

class Todos extends React.Component {
    render () {
        return (
            <div className="todos">
                <AddTodo/>
                <TodoList/>
            </div>
        )
    }
}

export default Todos