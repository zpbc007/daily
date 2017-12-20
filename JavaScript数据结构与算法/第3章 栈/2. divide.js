import Stack from './1. stack.js'

function divideBy2 (decNumber) {
    let remStack = new Stack(),
        rem,
        binaryString = ''

    while (decNumber > 0) {
        rem = decNumber % 2
        remStack.push(rem)
        decNumber = Math.floor(decNumber / 2)
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }

    return binaryString
}

function baseConvertor (decNumber, base) {
    let remStack = new Stack(),
        rem,
        digits = '0123456789ABCDEF',
        baseString = ''

    while (decNumber > 0) {
        rem = decNumber % base
        remStack.push(rem)
        decNumber = Math.floor(decNumber / base)
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]
    }

    return baseString
}

export {divideBy2, baseConvertor}