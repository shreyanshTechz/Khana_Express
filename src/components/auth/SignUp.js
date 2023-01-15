import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { createProject } from '../../action/projectAction'
import { signUp } from '../../action/authSctions'
import { connect } from 'react-redux'
export class SignUp extends Component {
    state = {
        email:'',password:'',firstName:'',address:'',amount:'',userid:'',lastname:'',phone:''

    }
    // state = {
    //     email:'',password:'',firstName:'',lastname:''
    // }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.props);
        this.props.signUp(this.state);
        
        return <Navigate to='/'/>
    }
  render() {
    console.log(this.props);
    const {auth} = this.props;
    if(auth.uid) return <Navigate to='/'/>
    return (

      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-fields">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' onChange={this.handleChange} />
            </div>
            <div className="input-fields">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' onChange={this.handleChange} />
            </div>
            <div className="input-fields">
                <label htmlFor="firstName">FirstName</label>
                <input type="text" id='firstName' onChange={this.handleChange} />
            </div>
            
            <div className="input-fields">
                <label htmlFor="lastName">lastName</label>
                <input type="text" id='lastName' onChange={this.handleChange} />
            </div>
            <div className="input-fields">
                <label htmlFor="address">Address</label>
                <input type="text" id='address' onChange={this.handleChange} />
            </div>
            <div className="input-fields">
                <label htmlFor="phone">phone</label>
                <input type="text" id='phone' onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <button className="pink btn lighten-1 z-depth-0">Register</button>
                <div className="red-text center">
                    
                    {/* {authError}{auth} */}
                </div>
                {/* <button className="pink btn lighten-1 z-depth-0 hoverable m7">Google</button> */}
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToprops=(state)=>{
    return{
        
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}

const mapDispatchToprops=(dispatch)=>{
    return{
        signUp:(newUser)=>dispatch(signUp(newUser)),
        createProject:(Orders) =>dispatch(createProject(Orders))
    }
}
export default connect(mapStateToprops,mapDispatchToprops)(SignUp)