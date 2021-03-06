import api from "../helpers/wp_api.js"; 
import {ajax} from "../helpers/ajax.js"; 
import {PostCard} from "./PostCard.js"; 
import {SearchCard} from "./SearchCard.js"; 
import {Post} from "./Post.js"; 
import {ContactForm} from "./ContactForm.js"; 

export async function Router() {


	const d = document, 
	w = window, 
	$main = d.getElementById('main');
	let {hash} = location; //Destructuración del valor en el hash y detecta el evento creado en index.js de hashchange

	//console.log(hash); 

	$main.innerHTML = null; 

	if (!hash || hash === "#/") {

		await ajax({

			url: api.POSTS,
			cbSuccess: (posts) => {
				console.log(posts);
				let html = ""; 
				//Aquí se cargan todo los post y se asignan a la variable
				posts.forEach(post => html += PostCard(post))

				//d.querySelector('.loader').style.display = 'none';
				//Aquí se asiga a la etiqueta que fue creada en Posts
				$main.innerHTML = html;
			}	
			
		}); 

	}else if(hash.includes('#/search')) {
		//Usa includes para validad y llamar a otro component que ejecuta las busquedas

		let query = localStorage.getItem('wpSearch')

		if (!query) {
			d.querySelector('.loader').style.display = 'none'; 
			return false;
		} 


		//console.log( `${api.SEARCH}${query}`);
		await ajax({

			url: `${api.SEARCH}${query}`,
			cbSuccess: (search) => {
				
				console.log(search);

				let html = ""; 

				if (search.lenght === 0) {

					html = `

						<p class="error">
							No existe resultados de búsqueda para el término 
							<mark>${query}</mark>
						</p>
					`; 
				}else {

					search.forEach(post => html += SearchCard(post)); 
				}
		
				$main.innerHTML = html;
				
			}	
			
		}); 
	
	}else if(hash ==='#/contacto') {

		// $main.innerHTML = "<h2>Sección de Contacto</h2>";

		$main.appendChild(ContactForm()); 


	}else {
		
		
		// aqui se carga el constenido del post usando la variable en el localstorage para poder enviar la id
		//console.log(`${api.POST}/${localStorage.getItem("wpPostId")}`);
		await ajax({

			url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
			cbSuccess: (post) => {
				
				console.log(post);
				$main.innerHTML = Post(post);
			}	
			
		}); 
	}

	
	d.querySelector('.loader').style.display = 'none';
	

}