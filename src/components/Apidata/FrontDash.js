import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Items from '../layout/Items';
import Api from './Api';
import ImgMediaCard from '../projects/SlideFront'
function FrontDash(props) {
    console.log(props);
	return (
		<>
        <div className="container">
        <ImgMediaCard/>
        </div>
        
			<div style={{width:"100%"}} className="container">
				{
					(props.item.map((item) =>
                        (<Api item={item}/>)
                        )
					)
				}
                	
			</div>
		</>
	);
}


export default FrontDash;
