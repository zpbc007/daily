"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INCREMENT = 'counter/INCREMENT';
exports.DECREMENT = 'counter/DECREMENT';
exports.RESET = 'counter/RESET';
function increment() {
    return {
        type: exports.INCREMENT
    };
}
exports.increment = increment;
function decrement() {
    return {
        type: exports.DECREMENT
    };
}
exports.decrement = decrement;
function reset() {
    return {
        type: exports.RESET
    };
}
exports.reset = reset;
//# sourceMappingURL=counter.js.map