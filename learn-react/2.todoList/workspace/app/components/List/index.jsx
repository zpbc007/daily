import React from 'react'

class List extends React.Component {

    constructor (props, context) {
        super(props, context)

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler (id) {
        debugger
        this.props.delFn(id)
    }

    render () {
        let data = this.props.todos
        return (
            <ul> 
                {data.map((item) => {
                    return (
                        <li key={item.id}
                            onClick={this.clickHandler.bind(this, item.id)}>
                            {item.text}
                        </li>
                    ) 
                })}
            </ul>
        )
    }
}

export default List