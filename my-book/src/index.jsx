import React from 'react'
import ReactDom from 'react-dom'
// 热更新
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import store from 'reduxPath/store'
import {BrowserRouter as Router} from 'react-router-dom'
import App from 'components/App/App'

if (MOCK) {
    require('mock/mock')
}

renderWithHotReload(App)

// 热更新（不刷新页面）
if (module.hot){
    module.hot.accept('components/App/App', () => {
        const NextApp = require('components/App/App').default
        renderWithHotReload(NextApp)
    }) 
} 

function renderWithHotReload (RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <RootElement/>
                </Router>
            </Provider>
        </AppContainer>, document.getElementById('app')
    )    
}