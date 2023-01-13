import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Items from '../layout/Items';
import Api from './Api';
function FrontDash(props) {
    console.log(props);
	return (
		<>
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
