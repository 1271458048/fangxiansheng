import {combineReducers} from 'redux'

// combineReducers 是将多个reducer 合并成一个reducer
// combineReducers 傻瓜合并法
import counter from './counter.js'
import todo from './todo.js'
export default combineReducers({
    counter,
    todo
})
