import React, { Component } from 'react'

import {compose} from 'redux'
import { connect } from 'react-redux'
import ImgMediaCard from '../projects/SlideFront'
import { firestoreConnect } from 'react-redux-firebase'
import ProjectList from '../projects/ProjectList'
import {Navigate} from 'react-router-dom'



class Dashboard extends Component {
  render() {
    const {projects,auth,items} = this.props;
    const project  = (projects!==undefined)?( projects.filter(item => item.user.email===auth.email) ):"";
    if(project!=="") project.uid = auth.uid
    if(!auth.uid) return <Navigate to='/signin'/>
    console.log(project);
    return (
      <div className="dashboard container">
        <div className="row">
            <div className="col">
                <ProjectList projects={project}/>
                <br></br>
                <ImgMediaCard  text="burger"/>
             
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
    projects:state.firestore.ordered.Orders,
    auth:state.firebase.auth
  }
}

export default compose(
  connect(mapStateToprops),firestoreConnect([{collection:'Orders'}])
)(Dashboard)