import React from 'react'
import { Switch} from 'react-router'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home from 'containers/Home'
import List from 'containers/List'
import Detail from 'containers/Detail'
import NotFound from 'containers/NotFound'

class RouterMap extends React.Component {

    updateHandle () {
        console.log('router 每次变化都会调用')
    }

    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/list' component={List}></Route>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}

export default RouterMap