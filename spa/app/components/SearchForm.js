
export function SearchForm() {
	const d = document,  $searchForm = d.createElement('form'), 
	$input = d.createElement('input');


	$searchForm.classList.add('search-form'); 
	$input.name = 'search'; 
	$input.type = 'search'; 
	$input.placeholder = 'Buscar...'; 
	$input.autocomplete = 'off'; 
	$searchForm.appendChild($input); 

	//Aquí mantiene el valor en el input cuando se da click a buscar
	if (location.hash.includes('#/seach')) {

		$input.value = localStorage.getItem('wpSearch');
	}

	//El evento search también aplica cuando se va a borrar
	d.addEventListener('search', e => {
		
		if (!e.target.matches('input[type="search"]')) return false;

		//Si el valor del input está vacio, elimina la variable 
		if (!e.target.value) localStorage.removeItem('wpSearch');
	})



	d.addEventListener('submit', e => {

		if (!e.target.matches('.search-form')) return false; 

		e.preventDefault(); 

		//Crear la variable para buscar
		localStorage.setItem('wpSearch', e.target.search.value); 

		//Este cambio de hash se detectará cuando se realice la busqueda
		location.hash = `#/search?search=${e.target.search.value}`; 
	})
	
	return $searchForm; 
}