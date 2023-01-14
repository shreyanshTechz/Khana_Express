import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SignedLinks from './SignedLinks'
import {compose} from 'redux'
// import { connect } from 'react-redux'
import { connect, Connect } from 'react-redux'
import SignedOutLinks from './SignedOutLinks'
import { firestoreConnect } from 'react-redux-firebase'
const Navbar = (props)=> {
    const {auth,orders} = props;
    console.log(orders);
    const links = auth.uid?<SignedLinks email={auth}/>:<SignedOutLinks/>
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
  return{
    auth:state.firebase.auth
  }
}
export default compose(
  connect(mapStateToprops),firestoreConnect([{collection:'Orders'}])
)(Navbar)
// export default connect(mapStateToprops)(Navbar)