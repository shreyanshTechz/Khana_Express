import React from 'react'
import ProjectSummary from './ProjectSummary'
// import { Link } from 'react-router-dom'
const ProjectList = ({projects}) =>{

  return (
    <div className="project-list row section">
      {projects && projects.map(project =>{
          return(<div className='col '>
            {/* <Link to={
            
            {pathname:'details/'+project[0].id,
              state : {
                project : project,
              }
          
            }}> */}
            <ProjectSummary project={project}/>
            {/* </Link> */}
            </div>
          )
      })}
    </div>
  )
}

export default ProjectList