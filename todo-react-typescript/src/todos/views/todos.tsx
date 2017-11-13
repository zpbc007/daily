import * as React from 'react'
import AddTodo from './addTodo'
import TodoList from './todoList'

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