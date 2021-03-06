 
 export function Main() {

 	const $main = document.createElement('main'); 
 	$main.id = 'main'; 


 	//Se hace esta validacion para poder aplicarle este estilo a todos menos a l seccion de búsqueda
 	if (!location.hash.includes('#/search')) {

 		$main.classList.add('grid-fluid'); 

 	}

 	 
 	return $main;  

 }