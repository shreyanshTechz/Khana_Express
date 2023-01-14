import React, { Component } from 'react'
import { Link, useLocation } from 'react-router-dom';
import projectReducer from '../../reducers/projectReducer'
// import ProjectDetails from './ProjectDetails';
// import {useLocation} from 'react-router-dom';

export default class ProjectList extends Component {
  render() {
    
    const {project} = this.props;
    // const d = project.createdAt.seconds;
    // const time = (new Date(project.createdAt.seconds * 1000)).toString();
    // console.log(time[date]);
    // var time;
    // var time = "erer";
    var price  = JSON.stringify(project.food.nutrients.CHOCDF).split('.')[0];
     console.log(project);
    return (
      
      <div>
        <div className="project-list col-sm section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content greeny white-text text-darken-3">
                    <span className="card-title">{project.food.label}</span>
                    <p>{project.content}</p>
                    <p id="x" className="white-text">$ {price}</p>
                </div>
            </div>
        </div>
      </div>
    )
    
  }
}
