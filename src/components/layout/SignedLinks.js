import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { connect, Connect } from 'react-redux'
import { signOut } from '../../action/authSctions'
import { stringify } from 'json5';
class SignedLinks extends Component {
  render() {
    const {email} = this.props;
    const name = email[0] + email[1];
    console.log(name);
    return (
      <div>
        <ul className="right">
            <li><NavLink to='/create'><img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/null/external-shopping-cart-interface-kiranshastry-gradient-kiranshastry.png"/></NavLink></li>
            <li><a  onClick={this.props.signOut}><img src="https://img.icons8.com/fluency/48/null/exit.png"/></a></li>
            {/* <li><NavLink to='/'></NavLink></li> */}
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{name}</NavLink></li>
            <li>{email}</li>
        </ul>
      </div>
    )
  }
}
const mapDispatchToprops = (dispatch)=>{
  return{
    signOut:()=>dispatch(signOut())
  }
}


export default connect(null,mapDispatchToprops)(SignedLinks)