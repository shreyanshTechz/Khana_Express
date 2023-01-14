import React, { Component } from 'react'
import { connect, Connect } from 'react-redux'
import { signIn } from '../../action/authSctions'
import { Navigate } from 'react-router-dom'



export class SignIN extends Component {
    state = {
      email:'',password:'',

    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        this.props.signIn(this.state)
        // return <Navigate to='/signUp'/>
    }
  render() {
    console.log("djsvnfds");
    const {authError} = this.props;
    
    const {auth} = this.props;
    if(auth.uid) return <Navigate to='/'/>
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Login</h5>
            <div className="input-fields">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' onChange={this.handleChange} />
            </div>
            <div className="input-fields">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <button className="pink btn lighten-1 z-depth-0">Login</button>
                <div className="red-text center">
                    {authError?<p>{authError}</p>:null}
                </div>
            </div>
        </form>
      </div>
    )
  }
}
const mapStateToprops = (state)=>{
  return{
    authError:state.auth.authError,
    auth:state.firebase.auth
  }
}
const mapDispatchToprops = (dispatch) =>{
  return{
    signIn : (cred)=>dispatch(signIn(cred))
  }
}


export default connect(mapStateToprops,mapDispatchToprops)(SignIN)