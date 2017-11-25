import React from 'react'

import Header from 'components/Header'

class Hello extends React.Component {
    constructor (props, context) {
        super(props, context)

        this.clickHandler = this.clickHandler.bind(this)
        this.state = {
            now: new Date()
        }
    }

    clickHandler () {
        this.setState({
            now: new Date()
        })
    }
    render () {
        return (
            <div>
                <Header title="Hello页面"/>
                <p onClick={this.clickHandler}>
                    hello {this.state.now.getMilliseconds()}
                </p>
            </div>
        )
    }
}

export default Hello