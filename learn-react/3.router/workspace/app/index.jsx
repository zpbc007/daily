import React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory } from 'history'

import RouterMap from 'router/routerMap'

let history = createBrowserHistory()

render(
    <RouterMap history={history}/>,
    document.getElementById('root')
)