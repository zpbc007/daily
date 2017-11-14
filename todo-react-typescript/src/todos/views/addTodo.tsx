import * as React from 'react'

import { addTodo, Action } from '../actions'
import { connect, Dispatch } from 'react-redux'

export interface Props {
    onAdd: (value: string) => string
}

class AddTodo extends React.Component<Props, object> {

    input: HTMLInputElement

    constructor (props: Props, context: object) {
        super(props, context)

        this.onSubmit = this.onSubmit.bind(this)
        this.refInput = this.refInput.bind(this)
    }

    onSubmit (ev: React.FormEvent<HTMLFormElement>) {
        // 阻止页面刷新
        ev.preventDefault()

        const input = this.input
        if (!input.value.trim()) {
            return
        }

        this.props.onAdd(input.value)
        input.value = ''
    }

    refInput (node: HTMLInputElement) {
        this.input = node
    }

    render () {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" ref={this.refInput}/>
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