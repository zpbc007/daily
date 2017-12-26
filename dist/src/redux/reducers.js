"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var counter_1 = require("@redux/reducers/counter");
var userInfo_1 = require("@redux/reducers/userInfo");
exports.default = redux_1.combineReducers({
    counter: counter_1.default,
    userInfo: userInfo_1.default
});
//# sourceMappingURL=reducers.js.map