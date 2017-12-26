"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var counter_1 = require("@redux/actions/counter");
var initState = {
    count: 0
};
function reducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case counter_1.INCREMENT:
            return {
                count: state.count + 1
            };
        case counter_1.DECREMENT:
            return {
                count: state.count - 1
            };
        case counter_1.RESET:
            return {
                count: 0
            };
        default:
            return state;
    }
}
exports.default = reducer;
//# sourceMappingURL=counter.js.map