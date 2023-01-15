import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../action/authSctions'
// import { stringify } from 'json5';
// import {Link} from 'react-router-dom'
// import SignedLinks from './SignedLinks'
import {compose} from 'redux'
// import { connect } from 'react-redux'
// import { connect, Connect } from 'react-redux'
// import SignedOutLinks from './SignedOutLinks'
import { firestoreConnect } from 'react-redux-firebase'
class SignedLinks extends Component {
  

  render() {
    // event.preventDefault()
    // const uid = this.props.data.auth.uid;
    // console.log(this.props);
    // var person;
    // for (let index = 0; index < this.props.data.people.length; index++) {
    //   const element = this.props.data.people[index].item;
    //   if(element===uid) person=this.props.data.people[index];
    // }
    const {data} = this.props;
    // const {people} = data;
    // console.log(data);
    const user = (data.people!==undefined)? data.people.filter(item => item.id===data.auth.uid)[0]:"";
    // // const name = user.firstName[0] + user.firstName[1];
    // console.log(user);
    // const user = people.filter(item => item.id===data.auth.uid);
    const name = (data.people!==undefined)? user.firstName[0] + user.firstName[1]:"";
    return (
      <div>
        <ul className="right">
            <li id='amount'>Amount :  ₹ {user.amount}</li>
            <li><NavLink to='/cart'><img alt='' src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/null/external-shopping-cart-interface-kiranshastry-gradient-kiranshastry.png"/></NavLink></li>
            <li><span  onClick={this.props.data.auth.signOut}><img alt='' src="https://img.icons8.com/fluency/48/null/exit.png"/></span></li>
            <li><NavLink to='/'></NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{name}</NavLink></li>
            <li>{user.firstName}</li>
        </ul> 
      </div>
    )
  }
}

const mapDispatchToprops = (dispatch)=>{
  return{
    people:dispatch.firestore.ordered.myprofile,
    signOut:()=>dispatch(signOut())
  }
}

export default compose(
  connect(mapDispatchToprops),firestoreConnect([{collection:'myprofile'}])
)(SignedLinks)
// export default connect(null,mapDispatchToprops)(SignedLinks)