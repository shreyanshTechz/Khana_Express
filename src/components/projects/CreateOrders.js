import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { createProject} from '../../action/projectAction'
import { orderProject } from '../../action/orderAction'
import { Navigate } from 'react-router-dom'
import firebase from '../../reducers/fbconfig/fbConfig'
export class CreateProject extends Component {
    //  db = getDatabase();
    
    // handleClickU  =(e)=>{
    //   const db = firebase.firestore();
    //   const ids = this.props.auth.uid;
    //   // console.log(db.collection("Users").doc(ids));
    //   // db.collection("Users").doc(ids).id = "Shreyansh";
    //   // var id = db.collection("users").document().getId();
    //   // console.log(db.collection("Users").listDocuments());
    //   db.collection("myprofile").doc(ids).update({amount: "100"})
    //   .then(() => {
    //     console.log("success");
    //   })
    //   .catch((error) => {
        
    //   });
    // }
    handleClick = (e) =>{
        e.preventDefault();
        const object = {email:this.props.auth.email};
        this.props.item.user = object;
        console.log(this.props.item.food.nutrients.CHOCDF);
        var price  = JSON.stringify(this.props.item.food.nutrients.CHOCDF).split('.')[0];
        alert(this.props.item.food.label +  " added to Cart");
        const curr_amt =Number(document.getElementById('amount').innerHTML.split('₹')[1]) + Number(price);
        console.log(curr_amt);
        document.getElementById('amount').innerHTML = "Amount : ₹" + curr_amt;
        const db = firebase.firestore();
        const ids = this.props.auth.uid;
        db.collection("myprofile").doc(ids).update({amount: curr_amt});
        this.props.orderProject(this.props.item);
    }
  render() {
    
    const {auth} = this.props;
    if(!auth.uid) return <Navigate to='/signin'/>
    // const {project} = this.props;
    const item = this.props.item;
    var price  = JSON.stringify(item.food.nutrients.CHOCDF).split('.')[0];
    // console.log(this.props);
    return (
        <div>
        <div class="col s2">
                          <div class="card">
                            <div class="card-image">
                              <img alt='' src={item.food.image}/>
                              {/* <span class="card-title" style={{fontWeight:"800"}}>{item.food.label}</span> */}
                              <span  class=" add btn-floating halfway-fab waves-effect waves-light red" onClick={this.handleClick}><i class="material-icons">add</i></span>
                            </div>
                            <div class="card-content">
                              <p style={{fontWeight:"800"}}>{item.food.label}</p>
                              <span>Amount : ₹ {price}</span>
                            </div>
                          </div>
                        </div>
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
        orderProject:(Orders) =>dispatch(orderProject(Orders))
    }
}
export default connect(mapStateToprops,mapDispatchToprops)(CreateProject)