import React from 'react'
import history from 'router/history'
import { Link } from 'react-router-dom'

class List extends React.Component {

    clickHandler (value) {
        history.push('/detail/' + value)
    }

    render () {
        let arr = [1, 2, 3]
        return (
            <ul>
                {
                    arr.map((item) => {
                        return (
                            <li key={item}>jump to <Link to={'detail/' + item}>{item}</Link></li>    
                        ) 
                    }) 
                }
            </ul>
        )
    }
}

export default List