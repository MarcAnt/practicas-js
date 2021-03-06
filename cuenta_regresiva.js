
const d = document; 
function countDown(id, limitDate, finalMessage) {


	let $countdown = d.getElementById(id),
		countDownDate = new Date(limitDate).getTime(); 

	let countDownTempo = setInterval( () => {
		let now = new Date().getTime(),
		limitTime = countDownDate - now, 
		days = Math.floor( limitTime / ( 1000 * 3600 * 24 ) ), 
		//Obtiene el resto de lo que queda cuando se calculan los días. Ej: 350, (554457) y luego divide entre (1000 * 60 * 60)
		//Se coloca el slice menos dos para que cuando sea un solo digito, ya aprezca el 09
		hours = ("0"+Math.floor(  ( limitTime % ( 1000 * 3600 * 24 ) )  / ( 1000 * 60 * 60 )  )).slice(-2), 
		mins = ("0"+Math.floor(  ( limitTime % ( 1000 * 3600 ) )  / ( 1000 * 60 )  )).slice(-2), 
		seconds =  ("0"+Math.floor(  ( limitTime % ( 1000 * 60) )  / ( 1000 )  )).slice(-2);

		$countdown.textContent = `Faltan ${days} día(s), ${hours} hora(s) ${mins} minutos, ${seconds} segundos `;  

		if( limitTime < 0 ) {
			clearInterval(countDownTempo);
			$countdown.textContent = `Faltan ${finalMessage} `;
		}

	}, 1000 )
}


countDown('count-down', 'Aug 29, 2021 00:00', 'Feliz cumple'); 