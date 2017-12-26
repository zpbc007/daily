import * as React from 'react'
import * as ReactDOM from 'react-dom'
// 热更新
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import App from '@components/App/App'
import store from '@redux/store'

if (MOCK) {
    require('mock/mock')
}

renderWithHotReload(App)

// 热更新（不刷新页面）
if (module.hot){
    module.hot.accept('@components/App/App', () => {
        const NextApp = require('@components/App/App').default
        renderWithHotReload(NextApp)
    }) 
} 

function renderWithHotReload (RootElement) {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <RootElement/>
                </Router>
            </Provider>
        </AppContainer>, document.getElementById('app')
    )    
}