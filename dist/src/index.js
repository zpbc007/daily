"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
// 热更新
var react_hot_loader_1 = require("react-hot-loader");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("@components/App/App");
var store_1 = require("@redux/store");
if (MOCK) {
    require('mock/mock');
}
renderWithHotReload(App_1.default);
// 热更新（不刷新页面）
if (module.hot) {
    module.hot.accept('@components/App/App', function () {
        var NextApp = require('@components/App/App').default;
        renderWithHotReload(NextApp);
    });
}
function renderWithHotReload(RootElement) {
    ReactDOM.render(React.createElement(react_hot_loader_1.AppContainer, null,
        React.createElement(react_redux_1.Provider, { store: store_1.default },
            React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement(RootElement, null)))), document.getElementById('app'));
}
//# sourceMappingURL=index.js.map