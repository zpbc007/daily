import * as React from 'react'

import { addTodo, Action } from '../actions'
import { connect, Dispatch } from 'react-redux'

export interface Props {
    onAdd: (value: string) => string
}

class AddTodo extends React.Component<Props, object> {

    state: {
        value: string
    }

    constructor (props: Props, context: object) {
        super(props, context)

        this.onSubmit = this.onSubmit.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.state = {
            value: ''
        }        
    }

    onSubmit (ev: React.FormEvent<HTMLFormElement>) {
        // 阻止页面刷新
        ev.preventDefault()

        const input = this.state.value
        if (!input.trim()) {
            return
        }

        this.props.onAdd(input)
        this.setState({
            value: ''
        })
    }

    onInputChange (ev: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            value: ev.target.value
        })
    }

    render () {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input 
                        className="new-todo" 
                        onChange={this.onInputChange}
                        value={this.state.value}
                    />
                    <button className="add-btn" type="submit">
                        添加
                    </button>
                </form>    
            </div>
        )
    }
} 

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        onAdd: (text: string) => {
            dispatch(addTodo(text))
        } 
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)