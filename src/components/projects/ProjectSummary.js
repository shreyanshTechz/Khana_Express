import React, { Component } from 'react'
// import { Link, useLocation } from 'react-router-dom';
// import projectReducer from '../../reducers/projectReducer'
// import ProjectDetails from './ProjectDetails';
// import {useLocation} from 'react-router-dom';
// import firebase from 'firebase/compat';
import firebase from '../../reducers/fbconfig/fbConfig';
export default class ProjectList extends Component {

  handleClick = (e)=>{
    // e.preventDefault();
    // console.log(this.props.project.food.foodId);
    // document.getElementById(this.props.project.food.foodId).innerHTML = 1 + Number(document.getElementById(this.props.project.food.foodId).innerHTML)
  
      console.log(this.props);
      // const object = {email:this.props.auth.email};
      // this.props.item.user = object;
      // console.log(this.props.item.food.nutrients.CHOCDF);
      var price  = JSON.stringify(this.props.project.food.nutrients.CHOCDF).split('.')[0];
      alert(this.props.project.food.label +  " added to Cart");
      const curr_amt =Number(document.getElementById('amount').innerHTML.split('₹')[1]) + Number(price);
      console.log(curr_amt);
      document.getElementById('amount').innerHTML = "Amount : ₹" + curr_amt;
      const db = firebase.firestore();
      const ids = this.props.project.user.uid;
      console.log(ids);
      db.collection("myprofile").doc(ids).update({amount: curr_amt});
      // this.props.orderProject(this.props.item);
  }
  handleClickU = (e)=>{
    e.preventDefault();
    // console.log(document.getElementById(this.props.project.food.foodId).display);
    document.getElementById(this.props.project.food.label).style.display='none';
    // console.log(this.props.project.food.foodId);
    document.getElementById(this.props.project.food.foodId).innerHTML = Number(document.getElementById(this.props.project.food.foodId).innerHTML)-1
  }
  
  render() {
    
    const {project} = this.props;
    
    // const d = project.createdAt.seconds;
    // const time = (new Date(project.createdAt.seconds * 1000)).toString();
    // console.log(time[date]);
    // var time;
    // var time = "erer";
    var price  = JSON.stringify(project.food.nutrients.CHOCDF).split('.')[0];
    //  console.log(project);
    return (
      
      
        
                          <div style={{margin:"20px"}} class="card" id={project.food.label}>
                            <div style={{display:"flex",flexDirection:"column"}} class="card-image">
                            <span  class=" add btn-floating hoverable waves-effect waves-light green" onClick={this.handleClickU}><i class="material-icons">remove</i></span>
                              <img style={{position:"absolute",height:"20vh",width:"20vh"}} src={project.food.image} alt=""/>
                              {/* <span class="card-title" style={{fontWeight:"800"}}>{item.food.label}</span> */}
                              <span  class=" add btn-floating hoverable  waves-effect waves-light red" onClick={this.handleClick}><i class="material-icons">add</i></span>
                              
                              
                            </div>
                            <div style={{width:"20vh"}} class="card-content">
                <br></br><br></br>
                            <span id={project.food.foodId} style={{fontWeight:"800",alignSelf:"flex-end"}}>1</span>
                              <p style={{fontWeight:"800"}}>{project.food.label}</p>
                              <span>Amount : ₹ {price}</span>
                            </div>
                          </div>
        
      
    )
    
  }
}
