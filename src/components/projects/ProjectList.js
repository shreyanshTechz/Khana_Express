import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'
const ProjectList = ({projects}) =>{

  return (
    <div className="project-list row section">
      {projects && projects.map(project =>{
          return(<div className='col '>
            <ProjectSummary project={project}/>
            </div>
          )
      })}
    </div>
  )
}

export default ProjectList