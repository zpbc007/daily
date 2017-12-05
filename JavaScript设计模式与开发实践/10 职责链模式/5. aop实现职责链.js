Function.prototype.after = function () {
    var self = this
    return function () {
        var ret = self.apply(this, arguments)
        if (ret === 'nextSuccessor') {
            return fn.apply(this, arguments)
        }
        return ret
    }
}