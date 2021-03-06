
const Component = (function(){

	//Creación del constructor del component
	const Constructor = function (options) {


		this.el = options.el; //el elemento donde se ejecuta el componente
		this.data = options.data; //Los elementos que entran en la input
		this.template = options.template; //Donde se crea el componente y se muestra
	}

	//Agregamos los metodos al prototipo del constructor del componente


	//Render UI 
	Constructor.prototype.render = function(){

		$el = document.querySelector(this.el); 

		if (!$el) return; 

		$el.innerHTML = this.template(this.data); 

		console.log(this.data);
	
	};

	//Actualizar el state de forma reactiva

	Constructor.prototype.setState = function(obj){
			for (let key in obj) {
				
				if (this.data.hasOwnProperty(key)) {

					// console.log(state, key, state[key], obj[key]);

					this.data[key] = obj[key]; 
				}
			}

			this.render(); 
	};


	Constructor.prototype.getState = function() {
		return JSON.parse(JSON.stringify(this.data)); 
	};

	return Constructor; 

})(); 