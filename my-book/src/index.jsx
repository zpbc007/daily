import React from 'react'
import ReactDom from 'react-dom'
// 热更新
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import store from 'reduxPath/store'

import getRouter from 'router/router'

renderWithHotReload(getRouter())

// 热更新（不刷新页面）
if (module.hot){
    module.hot.accept('./router/router.js', () => {
        const getRouter = require('./router/router').default
        renderWithHotReload(getRouter())
    }) 
} 

function renderWithHotReload (RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                {RootElement}
            </Provider>
        </AppContainer>, document.getElementById('app')
    )    
}