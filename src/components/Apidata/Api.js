import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Items from '../layout/Items';
import ImgMediaCard from '../projects/SlideFront'
function Api(props) {
    console.log(props);
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const loadPost = async () => {

			// Till the data is fetch using API
			// the Loading page will show.
			setLoading(true);

			// Await make wait until that
			// promise settles and return its result


            const options = {
                method: 'GET',
                url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
                params: {ingr: props.item},
                headers: {
                  'X-RapidAPI-Key': '7914dc87e2msh63c6ef9c498e562p12e7afjsn53bb0e865ab4',
                  'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
                }
              };

			const response = await axios.request(options);

			// After fetching data stored it in posts state.
			setPosts(response.data.hints);
            console.log(response.data.hints);

			// Closed the loading page
			setLoading(false);
		}

		// Call the function
		loadPost();
	}, []);
	return (
		<>
        
			<div className="sm6 row">
                <h1 style={{color:"white"}}>{props.item}</h1>
				{loading ? (
					<h4>Loading...</h4>) :(
					(posts.map((item) =>
                        (<Items item={item}/>)
                        )
					))
				}
                	
			</div>
		</>
	);
}

export default Api;
