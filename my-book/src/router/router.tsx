import React from 'react'
import { Route } from 'react-router-dom'

import Bundle from './Bundle'
import Loading from '@components/Loading/Loading'

import Home from 'bundle-loader?lazy&name=home!@pages/Home/Home'
import Page1 from 'bundle-loader?lazy&name=page1!@pages/Page1/Page1'
import Counter from 'bundle-loader?lazy&name=counter!@pages/Counter/Counter'
import UserInfo from 'bundle-loader?lazy&name=userInfo!@pages/UserInfo/UserInfo'
import NotFound from 'bundle-loader?lazy&name=notFound!@pages/NotFound/NotFound'

const createComponent = (component: React.Component) => () => (
    <Bundle load={ component } >
        {
            (Component: React.Component) => Component ? <Component/> : <Loading/ >
        }
    </Bundle>
)

export default () => (
    <div>
        <Route exact path="/" component={ createComponent(Home) } > </Route>
        <Route path="/page1" component={ createComponent(Page1) } > </Route>
        <Route path="/counter" component={ createComponent(Counter) } > </Route>
        <Route path="/userInfo" component={ createComponent(UserInfo) } > </Route>
        <Route component={ createComponent(NotFound) } > </Route>
    </div>
)