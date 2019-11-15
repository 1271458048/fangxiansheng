import {ADD, ADDSERVER, ADDSHOPPING, SYNCREDUCER} from '../actionType/actionCounterType.js'
// 同步阵营是一个（）接受按钮传过来的参数
export const add = () => ({type: ADD})
export const shoppingCount = () => ({type: ADDSHOPPING})

// 这里是我们的异步阵营 是两个（）一个（）接受按钮传过来的参数,第二个（）是系统给你的dispatch，getState
export const addserver = () => async(dispatch) => {
    var {count} = await fetch('/api/count').then(res => res.json());
    dispatch({type:ADDSERVER,payload: count})
} 


// 购物车的 提交按钮
export const submit = () => async(dispatch,getState) => {
    var counter = getState().counter.v;
    console.log(counter)
    var {count} = await fetch('/api/submit?count='+counter).then(res => res.json());
} 


export const getShoppingCount = () => async(dispatch) => {
    var {count} = await fetch('/api/getcount').then(res => res.json());
    console.log(count)
    // 将拉取的 count 数据 同步到 reducers
    dispatch({type:SYNCREDUCER,payload: +count})
} 