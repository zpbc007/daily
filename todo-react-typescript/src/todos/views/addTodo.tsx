import {Component} from 'react'

import{ addTodo } from '../actions'
import { connect, Dispatch } from 'react-redux'

export interface Props {
    onAdd: (value: string) => string
}

class AddTodo extends Component<Props, object> {

    input: HTMLInputElement

    constructor (props: any, context: any) {
        super(props, context)

        this.onSubmit = this.onSubmit.bind(this)
        this.refInput = this.refInput.bind(this)
    }

    onSubmit (ev: Event) {
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
} 

const mapDispatchToProps = (dispatch: Dispatch<>) => {
    return {
        onAdd: (text)=> {
            dispatch(addTodo(text))
        } 
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)


