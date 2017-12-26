"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
exports.default = function (store) { return function (next) { return function (action) {
    var dispatch = store.dispatch, getState = store.getState;
    if (typeof action === 'function') {
        action(dispatch, getState);
        return;
    }
    var promise = action.promise, types = action.types, afterSuccess = action.afterSuccess, rest = __rest(action, ["promise", "types", "afterSuccess"]);
    if (!action.promise) {
        return next(action);
    }
    var REQUEST = types[0], SUCCESS = types[1], FAILURE = types[2];
    next(__assign({}, rest, { type: REQUEST }));
    var onFulfilled = function (result) {
        next(__assign({}, rest, { result: result, type: SUCCESS }));
        if (afterSuccess) {
            afterSuccess(dispatch, getState, result);
        }
    };
    var onRejected = function (error) {
        next(__assign({}, rest, { error: error, type: FAILURE }));
    };
    return promise(axios_1.default).then(onFulfilled, onRejected).catch(function (error) {
        console.error('MIDDLEWARE ERROR:', error);
        onRejected(error);
    });
}; }; };
//# sourceMappingURL=promiseMiddleware.js.map