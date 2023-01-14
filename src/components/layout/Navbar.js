import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SignedLinks from './SignedLinks'
import {compose} from 'redux'
// import { connect } from 'react-redux'
import { connect, Connect } from 'react-redux'
import SignedOutLinks from './SignedOutLinks'
import { firestoreConnect } from 'react-redux-firebase'
const Navbar = (props)=> {
    const {auth,people} = props;
    
    console.log(people);
    const links = auth.uid?<SignedLinks data={props}/>:<SignedOutLinks/>
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
    people:state.firestore.ordered.myprofile,
    auth:state.firebase.auth
  }
}
export default compose(
  connect(mapStateToprops),firestoreConnect([{collection:'myprofile'}])
)(Navbar)
// export default connect(mapStateToprops)(Navbar)