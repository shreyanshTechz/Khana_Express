import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {useParams} from 'react-router-dom'
// import {useParams,useRouteMatch} from 'react-router-dom'
function ProjectDetails(props) {
  let { id } = useParams();
  console.log(id);
  const project = {tiltle:'Hey',content:'jj'};
  if(project){
  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
        <div className="card-content">
            <div className="card-title">{project.title}</div>
                <p>{project.content}</p>
                </div>
            
            <div className="card-action gret lighen-4 grey-text">
                <div>Posted by {project.authorFirstName} { project.authorLastName}</div>
                <div>2nd September , 2002</div>
            </div>
        </div>
      </div>
      </div>
  )
  }
}

export default ProjectDetails;
