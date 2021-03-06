export const PI = Math.PI; 

export let user = 'Marcos'; 

//Declarar la variable primero para exportar por default
// let pass = 'qwerty';
// export default pass; 


export function saludar() {
    console.log('Hola desde una funcion el módulo de constante');
}

export default class Saludar {
    constructor() {
        console.log('Saludos desde una clase en constante como modulo');
    }

}