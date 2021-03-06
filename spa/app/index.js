
//Aquí se ejecuta el componente principal APP 
import api from "./helpers/wp_api.js"; 
import {App} from "./App.js"; 


document.addEventListener("DOMContentLoaded", App); 

//Con el evento hashchange se decta los ambios en la url o el hash 
window.addEventListener('hashchange', () => {
	
	//Regresa el valor de 1 para que se pueda en todas la paginas
	api.page = 1; 
	App(); 

}); 