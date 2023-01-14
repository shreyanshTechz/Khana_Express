import React from 'react'
// import '@splidejs/splide/css';
// import { createProject} from '../../action/projectAction'
import { orderProject } from '../../action/orderAction';
export default function Items(item) {
    // console.log(item);
    function create(item) {
        var price  = JSON.stringify(item.food.nutrients.CHOCDF).split('.')[0];
        const pack = {Amount:price,Type:item.food.label}
        orderProject(pack);
    }
    item = item.item;
    var price  = JSON.stringify(item.food.nutrients.CHOCDF).split('.')[0];
    var [state, setState] = React.useState({ amount: "", address: "",phone:"",emailid:"",type:"" });
     
    if(item.food.image)
  return (
    
    <div>
        <div class="col s2">
                          <div class="card">
                            <div class="card-image">
                              <img src={item.food.image}/>
                              {/* <span class="card-title" style={{fontWeight:"800"}}>{item.food.label}</span> */}
                              <a class="btn-floating halfway-fab waves-effect waves-light red" onClick={() => {create(item)}}><i class="material-icons">add</i></a>
                            </div>
                            <div class="card-content">
                              <p style={{fontWeight:"800"}}>{item.food.label}</p>
                              <span>Amount : {price}</span>
                            </div>
                          </div>
                        </div>
                        {/* <figure id="item1" class="carouselItem trans3d"><div class="carouselItemInner trans3d">1</div></figure> */}
	
                  
    </div>
  )
}
