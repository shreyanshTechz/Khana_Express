import React from 'react'
// import '@splidejs/splide/css';

export default function Items(item) {
    item = item.item;
    var price  = JSON.stringify(item.food.nutrients.CHOCDF).split('.')[0];
    console.log(price);
    if(item.food.image)
  return (
    
    <div>
        <div class="col s2">
                          <div class="card">
                            <div class="card-image">
                              <img src={item.food.image}/>
                              {/* <span class="card-title" style={{fontWeight:"800"}}>{item.food.label}</span> */}
                              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
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
