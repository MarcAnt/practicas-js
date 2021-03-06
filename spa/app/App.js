
//APP se encarga de llamar los archivos y ejecutar las funciones

import {Header} from "./components/Header.js"; 
import {Loader} from "./components/Loader.js"; 
import {Main} from "./components/Main.js"; 
import {Router} from "./components/Router.js"; 
import {InfiniteScroll} from "./helpers/infinite_scroll.js"; 


export function App() {

	const $root = document.getElementById('root'); 
	
	//Con esto se corrigue que ya se duplique cuando se hace click en los links
	$root.innerHTML = null;

	$root.appendChild(Header()); 
	$root.appendChild(Main()); 
	$root.appendChild(Loader()); 

	Router(); 

	//Es un helper para el scroll
	InfiniteScroll(); 

}







//ajax({

	// url: api.POSTS,
	// cbSuccess: (posts) => {
	// 	console.log(posts);
	// }	
	// url: api.CATEGORIES,
	// cbSuccess: (categories) => {
	// 	console.log(categories);
	// }	
//})

