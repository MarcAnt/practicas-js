
export function ContactForm() {

	const d = document, $form = d.createElement('form'), $styles = d.getElementById('dynamic-styles');

	$form.classList.add('contact-form'); 

	$styles.innerHTML = `

		.contact-form { 
			--form-ok-color: green;
			--form-error-color: red;
			margin-left: auto;
			margin-right: auto;
			width: 80%; 
		}

		.contact-form > * {
			padding: .5rem; 
			margin: 1rem auto; 
			display: block; 
			width: 100%; 
		}

		.contact-form textarea {
			resize: none; 
		}

		.contact-form legend, .contact-form-response {
			font-size: 1.5rem; 
			font-weight: bold; 
			text-align: center;
		} 
		.contact-form input, .contact-form textarea {
			font-family: sans-serif;
			font-size: 1rem; 
		} 
		
		.contact-form input[type="submit"] {
			width: 50%;
			font-weight: bold;
			cursor: pointer;  
		} 

		.contact-form *::placeholder {
			color: #000;
		} 

		/*Valida que el contenido sea valido*/

		.contact-form [required]:valid {
			border: thin solid var(--form-ok-color);
		}

		/*Valida que el contenido no sea valido*/
		.contact-form [required]:invalid {
			border: thin solid var(--form-error-color);
		}

		.contact-form-error {
			margin-top: 1rem; 
			font-size: 80%; 
			background-color: var(--form-error-color);
			color: #fff; 
			transition: all 800ms ease;  
		}

		.contact-form-error.is-active {
			display: block; 
			animation: show-message 1s 1 normal 0s ease-out both; 
		} 

		.none {
			display: none; 
		}

		@keyframes show-message {

			0% { 
				visibility: hidden; 
				opacity: 0; 
			}

			100% {
				visibility: visible; 
				opacity: 1; 
			}
			
		}
	`; 

	$form.innerHTML = `
		<legend>Evíanos tus comentarios</legend>

		<input type="text" name="mame" placeholder="Escribe tu nombre" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" title="Nombre solo acepta letras y espacios en blanco" required>

		<input type="email" name="email" placeholder="Escribe tu email" title="Email incorrecto" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>

		<input type="text" name="subject" placeholder="Asunto a tratar" title="El asunto es requerido" required>
		
		<textarea name="comments" data-pattern="^.{1,255}$" cols="30" rows="10" title="Tu comentario no debe exceder los 255 caracteres" placeholder="Escribe tus comentarios" required></textarea>	

		<input type="submit" value="Enviar">

		<div class="contact-form-loader none">
			<img src="../loader.svg" alt="Cargando...">
		</div>

		<div class="contact-form-response none">
			<p>Los datos han sido enviados</p>
		</div>
	`; 


	function validationsForm() {
			const $form = d.querySelector('.contact-form'),
			$inputs = d.querySelectorAll('.contact-form [required]'); 
			// console.log({$form, $inputs});

			$inputs.forEach(input => {
				//Crear el mensaje de error
				const $span = d.createElement('span'); 
				$span.id = input.name; 
				$span.textContent = input.title; 
				$span.classList.add("contact-form-error","none"); 
				input.insertAdjacentElement('afterend', $span); 
			}); 

			d.addEventListener('keyup', e => {

				if (e.target.matches('.contact-form [required]')) {
					
					let $input = e.target, pattern = $input.pattern || $input.dataset.pattern; //Evalua si tiene un patron o no
					

					if (pattern && $input.value !== '') {
						let regex = new RegExp(pattern);
						return !regex.exec($input.value) //Evalua si es falso o true e patron para colocar o no el color rojo y la animacion 
						? d.getElementById($input.name).classList.add('is-active')
						: d.getElementById($input.name).classList.remove('is-active')
					}

					if (!pattern) {
						return $input.value === ''
						? d.getElementById($input.name).classList.add('is-active')
						: d.getElementById($input.name).classList.remove('is-active')

					}
				}

			}); 


			d.addEventListener('submit', e => {
				//e.preventDefault(); 

				const $loader = d.querySelector('.contact-form-loader'), $response = d.querySelector('.contact-form-response') 
				
				//Quitar la clase none al loader para que se pueda ver
				$loader.classList.remove('none');

				console.log(e.target);

				fetch('https://formsubmit.co/ajax/blackiron662@gmail.com', {
					method: 'POST', 
					 headers: { 
				        'Content-Type': 'application/json',
				        'Accept': 'application/json'
				    },
					body: new FormData(e.target) //aquí ya parsea todo los inputs y sus valores 
				})
				.then(res => res.ok ? res.json() : Promise.reject(res))
				.then(json => {

					console.log(json);

					$loader.classList.add('none');
					$response.classList.remove('none');
					$response.innerHTML = `<p>${json.message}</p>`; 
					$form.reset();
				})
				.catch(err => {

					let message = err.statusText || 'Ocurrió un error al enviar. Inteta nuevamente';
					$response.innerHTML = `<p>Erro ${err.status}: ${message}</p>`; 
				})
				.finally( setTimeout(()=> {
					$response.classList.add('none'); 
					$response.innerHTML = ''; 
				}, 3000))

			}); 
		}

	//Se carga las validaciones hasta que termine de cargar el documento
	setTimeout( () => 	validationsForm() , 100);	
 	


	return $form;  

}