import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {Hello} from './components/Hello/Hello'

ReactDOM.render(
    <Hello complier="Typescript" framework="React" />,
    document.getElementById('app')
)