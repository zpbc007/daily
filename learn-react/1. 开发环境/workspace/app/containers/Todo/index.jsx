import React from 'react'

import Input from 'components/Input'
import List from 'components/List'

class Todo extends React.Component {

    constructor (props, context) {
        super(props, context)

        this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
        this.submitFn = this.submitFn.bind(this)
        this.delFn = this.delFn.bind(this)

        this.state = {
            todos: []
        }
    }

    shouldComponentUpdate () {
        return true
    }

    submitFn (value) {
        debugger
        let id = this.state.todos.length
        this.setState({
            todos: this.state.todos.concat({
                id: id,
                text: value
            })
        })
    }

    delFn (id) {
        debugger
        let data = this.state.todos
        this.setState({
            todos: data.filter((item) => {
                return item.id !=id 
            })
        })
    }

    render () {
        return (
            <div>
                <Input submitFn={this.submitFn}/>
                <List todos={this.state.todos} delFn={this.delFn}/>
            </div>
        )
    }
}

export default Todo
