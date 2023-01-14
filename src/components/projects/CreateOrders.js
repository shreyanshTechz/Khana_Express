import React, { Component } from 'react'
import { connect, Connect } from 'react-redux'
// import { createProject} from '../../action/projectAction'
import { orderProject } from '../../action/orderAction'
import { Navigate } from 'react-router-dom'
export class CreateProject extends Component {
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
                              <img src={item.food.image}/>
                              {/* <span class="card-title" style={{fontWeight:"800"}}>{item.food.label}</span> */}
                              <a  class=" add btn-floating halfway-fab waves-effect waves-light red" onClick={this.handleClick}><i class="material-icons">add</i></a>
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