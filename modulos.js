
//Los modulos que tengan default van por fuera 
import Saludar,{saludar, PI, user} from './constantes.js'; 
import {aritmetica as calc} from './aritmetica.js'; 


console.log(PI, user);
console.log(calc.sumar(2,3));
saludar()

let saludo = new Saludar(); 
