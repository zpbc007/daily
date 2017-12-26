"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var reducers_1 = require("@redux/reducers");
var promiseMiddleware_1 = require("./middleware/promiseMiddleware");
var store = redux_1.createStore(reducers_1.default, redux_1.applyMiddleware(promiseMiddleware_1.default));
if (module.hot) {
    module.hot.accept('./reducers', function () {
        var nextCombineReducers = require('./reducers').default;
        store.replaceReducer(nextCombineReducers);
    });
}
exports.default = store;
//# sourceMappingURL=store.js.map