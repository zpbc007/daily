import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render () {
        return (
            <div>
                <p>Home 页面</p>
                <Link to="/List">to list</Link>
            </div>
        )
    }
}

export default Home