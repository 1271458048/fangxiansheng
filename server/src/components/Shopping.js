import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import * as counterActionHandle from '../actions/actionCounterHandle.js'
import './Shopping.less'
class Shopping extends Component {
    render() {
        return (
            <div className='content'>
                详情页面 {this.props.v}
                <button onClick={() => this.props.counterActionHandle.shoppingCount()}>加商品数量</button>
                <button>减商品数量</button>
                <button onClick={() => this.props.counterActionHandle.submit()}>提交订单数量</button>
            </div>
        )
    }
}
export default connect(
    ({counter}) => ({
        v: counter.v
    }),
    (dispatch) => ({
        counterActionHandle:bindActionCreators(counterActionHandle,dispatch)
    })
)(Shopping)
