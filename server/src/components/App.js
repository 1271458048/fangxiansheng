import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header.js';
import Shopping from './Shopping.js';
import { bindActionCreators } from 'redux';
import * as counterActionHandle from '../actions/actionCounterHandle.js';
class App extends Component {
    constructor(props) {
        super(props);
        this.props.counterActionHandle.getShoppingCount()
    }
    render() {
        return (
            <div>
                购物车商品数量 {this.props.v}
                <Header v={this.props.v}/>
                <button onClick={() => this.props.counterActionHandle.add()}>+</button>
                <button onClick={() => this.props.counterActionHandle.addserver()}>加服务器那么多</button>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return <li key={index}>{item.title}</li>
                        })
                    }
                </ul>

                <div>
                    <Shopping></Shopping>
                </div>
            </div>
        )
    }
}
// 如果想从全局那数据的话 需要使用react-redux中connect 读取全局数据 被自动的放在的 props里面
export default connect(
    // 这是没有使用bindActionCreator 的点击事件
    ({counter,todo}) => ({
        v: counter.v,
        list: todo.list
    }),
    (dispatch) => ({
        // 这是使用bindActionCreators包装的事件  是给我们下午讲 thunk 的铺垫
        counterActionHandle:bindActionCreators(counterActionHandle,dispatch)
    })
)(App)