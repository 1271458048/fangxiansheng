import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
// 安装redux-thunk 后需要引入
import thunk from 'redux-thunk';
import App from './components/App'; 
import reducer from './reducers/index.js'
// logger 是用来记录action的操作
// logger 网址 https://www.npmjs.com/package/redux-logger
import logger from 'redux-logger'
// 文档 https://www.jianshu.com/p/ad7eddb23d66
// 将thunk放在 logger 后面 一会就通过logger能看到 拦截信息 thunk返回的是一个函数
const store = createStore(reducer,applyMiddleware(logger,thunk))

// Provider组件中的  store = {store} 就是将store中的state 放在全局中 只要是App组件中的所有组件 都能拿到state
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)