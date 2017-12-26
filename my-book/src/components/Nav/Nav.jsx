import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button, Menu, Icon} from 'antd' 

import './Nav.css'

const routeObj = [
    {
        text: '首页',
        link: '/',
        id: '1',
        icon: 'user'
    },
    {
        text: 'Page1',
        link: '/page1',
        id: '2',
        icon: 'video-camera'
    },
    {
        text: 'Counter',
        link: '/counter',
        id: '3',
        icon: 'upload'
    },
    {
        text: 'UserInfo',
        link: '/userInfo',
        id: '4',
        icon: 'user'
    },
]

export default class Nav extends Component {
    render () {
        return (
            <div>
                <div className="logo"></div>
                <Menu theme="dark" mode="inline">
                    {routeObj.map(item => {
                        return (
                            <Menu.Item key={item.id}>
                                <Link to={item.link}>
                                    <Icon type={item.icon}/>
                                    <span>{item.text}</span>
                                </Link>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </div>
        )
    }
} 