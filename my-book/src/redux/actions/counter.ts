export const INCREMENT = 'counter/INCREMENT'
export type INCREMENT = typeof INCREMENT
export const DECREMENT = 'counter/DECREMENT'
export type DECREMENT = typeof DECREMENT
export const RESET = 'counter/RESET'
export type RESET = typeof RESET

export function increment () {
    return {
        type: INCREMENT
    }
}

export function decrement () {
    return {
        type: DECREMENT
    }
}

export function reset () {
    return {
        type: RESET 
    }
}