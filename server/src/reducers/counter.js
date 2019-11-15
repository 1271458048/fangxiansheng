import {ADD, ADDSERVER, ADDSHOPPING, SYNCREDUCER} from '../actionType/actionCounterType.js';

export default (state = {v : 0}, action) => {
    if(action.type === ADD){
        return {v: state.v + 1}
    }else if(action.type === ADDSERVER){
        return {v: state.v + action.payload}
    }else if(action.type === ADDSHOPPING){
        return {v: state.v + 1}
    }else if(action.type === SYNCREDUCER){
        return {v: +action.payload}
    }
    return state
}