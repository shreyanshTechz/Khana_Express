import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'
const ProjectList = ({projects}) =>{
  
  return (
    <div className="project-list section">
      {projects && projects.map(project =>{
          return(<Link to={
            
            {pathname:'details/'+project.id,
              state : {
                project : project,
              }
          
            }}>
            <ProjectSummary project={project}/></Link>
          )
      })}
    </div>
  )
}

export default ProjectList