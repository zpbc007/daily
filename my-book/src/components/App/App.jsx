import React, {Component} from 'react'
import { Layout, Menu, Icon} from 'antd'
const { Header, Sider, Content} = Layout

import Nav from 'components/Nav/Nav'
import getRouter from 'router/router'

export default class App extends Component {

    constructor (props) {
        super(props)
        this.state = {
            collapsed: false
        }

        this.onCollapse = this.onCollapse.bind(this)
    }

    onCollapse () {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render () {
        return (
            <Layout style={{minHeight: '100vh'}}>
                {/* 左侧菜单栏 */}
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}>
                    <Nav/>
                </Sider>
                {/* 右侧内容区域 */}
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        {getRouter()}
                    </Content>
                </Layout>
            </Layout>
        )
    }
} 