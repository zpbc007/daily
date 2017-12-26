"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_USER_INFO_REQUEST = 'userInfo/GET_USER_INFO_REQUEST';
exports.GET_USER_INFO_SUCCESS = 'userInfo/GET_USER_INFO_SUCCESS';
exports.GET_USER_INFO_FAIL = 'userInfo/GET_USER_INFO_FAIL';
function getUserInfoRequest() {
    return {
        type: exports.GET_USER_INFO_REQUEST
    };
}
function getUserInfoSuccess(userInfo) {
    return {
        type: exports.GET_USER_INFO_SUCCESS,
        userInfo: userInfo
    };
}
function getUserInfoFail() {
    return {
        type: exports.GET_USER_INFO_FAIL
    };
}
function getUserInfo() {
    return {
        types: [exports.GET_USER_INFO_REQUEST, exports.GET_USER_INFO_SUCCESS, exports.GET_USER_INFO_FAIL],
        promise: function (client) { return client.get("/api/user"); }
    };
}
exports.getUserInfo = getUserInfo;
//# sourceMappingURL=userInfo.js.map