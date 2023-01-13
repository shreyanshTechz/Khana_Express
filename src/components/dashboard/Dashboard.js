import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'
import {compose} from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {Navigate} from 'react-router-dom'



class Dashboard extends Component {
  render() {
    const {projects,auth,items} = this.props;
    if(!auth.uid) return <Navigate to='/signin'/>
    return (
      <div className="dashboard container">
        <div className="row">
            <div className="col">
                <ProjectList projects={projects}/>
            </div>
            <div className="col offset-m1"></div>
            {/* <Notification/> */}
        </div>
      </div>
    )
  }
}
const mapStateToprops = (state) =>{
  // console.log(state)
  
  return{
    projects:state.firestore.ordered.projects,
    auth:state.firebase.auth
  }
}

export default compose(
  connect(mapStateToprops),firestoreConnect([{collection:'projects'}])
)(Dashboard)