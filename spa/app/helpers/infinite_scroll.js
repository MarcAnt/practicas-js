import api from "./wp_api.js"; 
import {ajax} from "./ajax.js"; 
import {SearchCard} from "../components/SearchCard.js"; 
import {PostCard} from "../components/PostCard.js"; 

export async function InfiniteScroll() {

	const d = document, w = window; 

	let query = localStorage.getItem('wpSearch'),
	apiURL, 
	Component; //High Order Component 

	w.addEventListener('scroll', async e => {

		let { scrollTop, clientHeight, scrollHeight } = d.documentElement, 
		{hash} = w.location; 


		// console.log({ scrollTop, clientHeight, scrollHeight, hash });

		if ( scrollTop + clientHeight >= scrollHeight) {

			api.page++; 

			if (!hash || hash === "#/") {

				apiURL = `${api.POSTS}&page=${api.page}`; 
				Component = PostCard; 

			}else if(has.includes('#/search')) {

				apiURL = `${api.SEARCH}${query}&page=${api.page}`; 
				Component = SearchCard; 

			}else {
				return false; 
			}


			d.querySelector('.loader').style.display = 'block'; 

			await ajax({
				//La apiURl ya viene seteada con los valores necesarios
				url: apiURL, 
				cbSuccess: (posts) => {
					// console.log(posts);

					let html = ""; 
					//Se envia el tipo de componente segun en la página donde este
					posts.forEach( post => html += Component(post) );

					//Los agrega al final para que no los sobre escriba todo
					d.getElementById('main').insertAdjacentHTML('beforeend', html); 
				}	

			}); 


		}

	});  



}