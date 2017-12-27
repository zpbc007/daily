import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button, Menu, Icon} from 'antd' 

import {routeObj} from 'constant/LeftMenu'

import './SideMenu.css'
/**
 * 点击菜单后执行click事件
 */
export default class SideMenu extends Component {
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
                        }
                    )}
                </Menu>
            </div>
        )
    }
} 