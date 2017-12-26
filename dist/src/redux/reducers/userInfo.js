"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var userInfo_1 = require("@redux/actions/userInfo");
var initState = {
    isLoading: false,
    userInfo: {},
    errorMsg: ''
};
function reducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case userInfo_1.GET_USER_INFO_REQUEST:
            return __assign({}, state, { isLoading: true, userInfo: {}, errorMsg: '' });
        case userInfo_1.GET_USER_INFO_SUCCESS:
            return __assign({}, state, { isLoading: false, userInfo: action.result.data, errorMsg: '' });
        case userInfo_1.GET_USER_INFO_FAIL:
            return __assign({}, state, { isLoading: false, userInfo: {}, errorMsg: '请求错误' });
        default:
            return state;
    }
}
exports.default = reducer;
//# sourceMappingURL=userInfo.js.map