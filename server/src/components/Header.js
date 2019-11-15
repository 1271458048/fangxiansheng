import React, { Component } from 'react'
import {connect} from 'react-redux'
class Header extends Component {
    constructor(props) {
        super(props);
         
    } 
    render() {
        return (
            <div>
               Header {this.props.v}
            </div>
        )
    }
} 
export default Header