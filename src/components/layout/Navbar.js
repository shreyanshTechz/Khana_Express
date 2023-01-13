import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SignedLinks from './SignedLinks'
import { connect, Connect } from 'react-redux'
import SignedOutLinks from './SignedOutLinks'
const Navbar = (props)=> {

  
    const {auth} = props;
    console.log(auth.email);
    const links = auth.uid?<SignedLinks email={auth.email}/>:<SignedOutLinks/>
    return (
      <div>
        <nav className= "nav-wrapper brown darken-4">
            <div className="container">
                <Link to='/' className='brand-logo left'>Khana Express </Link>
                {links}
            </div>
        </nav>
      </div>
    )
  
}
const mapStateToprops = (state)=>{
  // console.log(state);
  return{
    
    auth:state.firebase.auth
  }
}

export default connect(mapStateToprops)(Navbar)