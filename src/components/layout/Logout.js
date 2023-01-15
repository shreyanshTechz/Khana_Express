import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../action/authSctions'
class SignedLinks extends Component {
  

  render() {
    return (
            <li><span  onClick={this.props.signOut}><img alt='' src="https://img.icons8.com/fluency/48/null/exit.png"/></span></li>
    )
  }
}

const mapDispatchToprops = (dispatch)=>{
  return{
    signOut:()=>dispatch(signOut())
  }
}

export default connect(null,mapDispatchToprops)(SignedLinks)