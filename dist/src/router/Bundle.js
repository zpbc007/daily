"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Bundle = /** @class */ (function (_super) {
    __extends(Bundle, _super);
    function Bundle(props) {
        return _super.call(this, props) || this;
    }
    Bundle.prototype.componentWillMount = function () {
        this.load(this.props);
    };
    Bundle.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    };
    Bundle.prototype.load = function (props) {
        var _this = this;
        this.setState({
            mod: null
        });
        props.load(function (mod) {
            _this.setState({
                mod: mod.default ? mod.default : mod
            });
        });
    };
    Bundle.prototype.render = function () {
        return this.props.children(this.state.mod);
    };
    return Bundle;
}(react_1.Component));
exports.default = Bundle;
//# sourceMappingURL=Bundle.js.map