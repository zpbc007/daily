import React from 'react'

class Input extends React.Component {

    constructor (props, context) {
        super(props, context)

        this.changeHandler = this.changeHandler.bind(this)
        this.keyUpHandler = this.keyUpHandler.bind(this)

        this.state = {
            value: ''
        }
    }

    changeHandler (event) {
        this.setState({
            value: event.target.value
        })
    }

    keyUpHandler (event) {
        let value = this.state.value
        if (event.keyCode === 13 && value.trim()) {
            this.props.submitFn(value)
            this.setState({
                value: ''
            })
        }
    }

    render () {
        return (
            <input
                style={{width: '100%', height: '40px'}}
                value={this.state.value}
                onChange={this.changeHandler}
                onKeyUp={this.keyUpHandler}
            />
        )
    }
}

export default Input