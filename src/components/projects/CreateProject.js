import React, { Component } from 'react'
import { connect} from 'react-redux'
import { createProject} from '../../action/projectAction'
// import { Navigate } from 'react-router-dom'
export class CreateProject extends Component {
    state = {
        name:'',phone:'',address:'',email:'',amount:'',
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(this.state);
        this.props.createProject(this.state)
    }
  render() {
    // const {auth} = this.props;
    // if(!auth.uid) return <Navigate to='/signin'/>

    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">New User</h5>
            
            <div className="input-fields">
                <label htmlFor="Address">Address</label>
                <input type="text" id='Address' onChange={this.handleChange} />
            </div>
            
            <div className="input-fields">
                <label htmlFor="Email">Email</label>
                <input type="email" id='Email' onChange={this.handleChange} />
            </div>
{/*             
            <div className="input-fields">
                <label htmlFor="Phone">Phone</label>
                <input type="number" id='Phone' onChange={this.handleChange} />
            </div> */}
            <div className="input-fields">
                <label htmlFor="Phone">Phone</label>
                <input type="number" id='Phone' onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <button className="pink btn lighten-1 z-depth-0">Submit</button>
            </div>
        </form>
      </div>
    )
  }
}
const mapStateToprops = (state)=>{
    return{
        auth:state.firebase.auth
    }
}

const mapDispatchToprops = (dispatch) =>{
    return{
        createProject:(Users) =>dispatch(createProject(Users))
    }
}
export default connect(mapStateToprops,mapDispatchToprops)(CreateProject)