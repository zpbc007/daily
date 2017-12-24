import {increment, decrement, reset} from './actions/counter'
import store from './store'

console.log(`init state ${JSON.stringify(store.getState())}`)

// 每次state更新 打印日志
let unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// 发起action
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())

// 停止监听
unsubscribe()