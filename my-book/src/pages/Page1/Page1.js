import React, {Component} from 'react'

import './Page1.css'

import image from './images/pic.jpeg'

export default class Page1 extends Component{
    render () {
        return (
            <div className="page-box">
                page1
                <img src={image}/>
            </div>
        )
    }
}