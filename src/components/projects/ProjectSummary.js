import React, { Component } from 'react'
import { Link, useLocation } from 'react-router-dom';
import projectReducer from '../../reducers/projectReducer'
import ProjectDetails from './ProjectDetails';
// import {useLocation} from 'react-router-dom';

export default class ProjectList extends Component {
  render() {
    
    const {project} = this.props;
    // console.log(project);
    return (
      <div>
        <Link to={'/details'} project={project}>
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content greeny white-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>{project.content}</p>
                    <p className="white-text">3rd September , 2:00</p>
                </div>
            </div>
        </div>
        </Link>
      </div>
    )
  }
}
