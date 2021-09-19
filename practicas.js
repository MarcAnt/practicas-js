//Funciones

const dollars = ["32$", "15$", "12$", "17$", "20$"];

//map

//Forma manual a
let prices = [];
for (let i = 0; i < dollars.length; i++) {
  prices[i] = Number(dollars[i].slice(0, dollars[i].length - 1));
}
//Forma manual b
let prices = [];
for (const dollar of dollars) {
  prices.push(Number(dollar.slice(0, dollar.length - 1)));
}

prices = dollars.map((dollar) => Number(dollar.slice(0, dollar.length - 1)));
console.log(prices);

//filter

//filtro manual
let expensive = [];
for (const price of prices) {
  if (price >= 20) {
    expensive.push(price);
  }
}

prices.filter((price) => price >= 20);

//Array unicos
const a = [10, 10, 20, 10, 10, 20];
a.filter((total, idx, arr) =>
  console.log(arr.indexOf(total) === idx, idx, arr.indexOf(total))
);

//reduce
let sum = 0;
for (price of expensive) {
  sum += price;
}
sum = expensive.reduce((acum, price) => acum + price);

//Todos juntos
sum = dollars
  .map(Number(dollar.slice(0, dollar.length - 1)))
  .filter((price) => price >= 20)
  .reduce((acum, price) => acum + price);

//Todos juntos pero sin usar las funciones map, filter ni reduce
sum = 0;
for (const dollar of dollars) {
  const price = Number(dollar.slice(0, dollar.length - 1));
  if (price >= 20) {
    sum += price;
  }
}
//usando un foreach
prices
  .map((price) => ({ price, currency: "$" }))
  .forEach((obj) => (obj.price += 10));

//Desctructurando

let numeros = [1, "a", false];
const [uno, a, bool] = numeros;
console.log(uno, a, bool);

let obj = { nombre: "Marcos", edad: 32 };
const { nombre, edad } = obj;
console.log(nombre, edad);

// Parametros REST
function sumar(a, b, ...c) {
  let result = a + b;

  c.forEach(function (n) {
    result += n;
  });

  return result;
}

console.log(sumar(2, 5));
console.log(sumar(2, 5, 7));

// Spread operator
let arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 10];

const arrFinal = [...arr1, ...arr2];
console.log(arrFinal);

// Prototipos
// Funcion constructora
function Animal(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;

  // this.sonar = function () {
  // 	console.log('sonidos');
  // }
}

//Se colocan los metodos por fuera de la funcion construtora del prototipo
Animal.prototype.ladrar = function () {
  console.log("sonidos");
};

const perra = new Animal("susy", "hembra");
perra.ladrar();

// Herencia prototipica
function Perro(nombre, genero, medida) {
  this.super = Animal;
  this.super(nombre, genero);

  this.medida = medida;
}

//Perro esta heredando de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//sobreescritura de métodos del prototipo padre en el hijo
Perro.prototype.ladrar = function () {
  console.log("soy un perro y ladro");
};

//metodo exclusivo
Perro.prototype.correr = function () {
  console.log("estoy corriendo");
};

const otroPerro = new Perro("perro1", "macho", "grande");

console.log(otroPerro);
otroPerro.ladrar();
otroPerro.correr();

//Clases

class OtroAnimal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  //Atributos

  //Métodos
  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  }

  saludar() {
    console.log("Hola, me llamo " + this.nombre);
  }
}

//Herencia de Clases

class OtroPerro extends OtroAnimal {
  constructor(nombre, genero, medidas) {
    //Lamando el constructor de la clase padre
    super(nombre, genero);
    this.medidas = medidas;
    this.raza = null;
  }

  //Métodos

  sonar() {
    console.log("Hago sonidos porque soy un perro");
  }

  ladrar() {
    console.log("woff woff");
  }

  //Métodos Estáticos

  static QueSoy() {
    console.log("Soy un perro");
  }

  //Setter

  set setRaza(raza) {
    this.raza = raza;
  }

  //Getter
  get getRaza() {
    return this.raza;
  }
}

const mimi = new OtroAnimal("Mimi", "Hembra"),
  scooby = new OtroPerro("Scooby", "Macho", "Gigante");
console.log(mimi.nombre);
mimi.saludar();

console.log(scooby.medidas);
scooby.ladrar();
scooby.saludar();

//Set se toma como una declaración de propiedades
scooby.setRaza = "Mestizo";
scooby.getRaza;

OtroPerro.QueSoy();

//RegExp Expresiones regulares

let cadena = `Lorem ipsum dolor sit amet consectetur adipisicing, elit. Sequi, 
non facere quibusdam repudiandae reprehenderit ad commodi perferendis blanditiis 
suscipit doloremque voluptatibus illum mollitia dicta nesciunt quo dolores laudantium unde nam.`;

//Ignora minusculas (i) y que sean todos los caracteres (g);
let expReg = /lorem/gi;
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

// 1) Programa una función que cuente el número de caracteres de una cadena de texto,
//pe. miFuncion("Hola Mundo") devolverá 10.

function countChart(words = "") {
  let typeEntry = words;

  if (
    typeof typeEntry == "number" ||
    typeof typeEntry == "boolean" ||
    typeof typeEntry == "function" ||
    typeof typeEntry == "object" ||
    typeof typeEntry == "array" ||
    typeof typeEntry == null ||
    typeof typeEntry == undefined ||
    !typeEntry
  ) {
    console.info("Por favor ingresa una palabra");
    return false;
  }

  console.log(`La palabra ${words} tiene: ${words.length} caracteres`);
}

countChart("Hola");

//Forma reducida pero solo evaluando una condición de que esté vacía
// const contarCaracteres = (cadena = '') =>
// 	(!cadena)
// 		? console.warn("No insetartaste ninguna cadena");
// 		: console.info(`La palabra ${words} tiene: ${words.length} caracteres`);
// contarCaracteres('Hola Mundo');

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
//pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function cutWord(word, index) {
  let typeEntry = word;

  if (
    typeof typeEntry == "number" ||
    typeof typeEntry == "boolean" ||
    typeof typeEntry == "function" ||
    typeof typeEntry == "object" ||
    typeof typeEntry == "array" ||
    typeof typeEntry == null ||
    typeof typeEntry == undefined
  ) {
    console.log("Por favor ingresa una palabra");
    return false;
  }

  console.log(word.slice(0, index));
}

cutWord("Programa una función que dada una String", 10);

const recortarTexto = (texto = "", longitud = undefined) =>
  !texto || typeof texto == "number"
    ? console.warn("Por favor ingresa un texto")
    : longitud === undefined
    ? console.warn("Por favor ingresa un valor para recortar el texto")
    : console.info(texto.slice(0, longitud));

recortarTexto(12, 10);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
//miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function stringSplitToArrays(words) {
  let typeEntry = words;

  if (
    typeof typeEntry == "number" ||
    typeof typeEntry == "boolean" ||
    typeof typeEntry == "function" ||
    typeof typeEntry == "object" ||
    typeof typeEntry == "array" ||
    typeof typeEntry == null ||
    typeof typeEntry == undefined
  ) {
    console.log("Por favor ingresa una palabra");
    return false;
  }

  console.log(words.split(" "));
}

stringSplitToArrays("Hola que tal");

const cortarTexto = (text = "") =>
  !text ||
  typeof text == "number" ||
  typeof text == "boolean" ||
  typeof text == "function" ||
  typeof text == "object" ||
  typeof text == "array" ||
  typeof text == null ||
  typeof text == undefined
    ? console.warn("Por favor ingresa un texto")
    : console.info(text.split(" "));

cortarTexto("Hola soy Marcos");

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3)
// devolverá Hola Mundo Hola Mundo Hola Mundo.

function repeatWords(words, repeats) {
  for (let i = 0; i < repeats; i++) {
    console.log(words);
  }
}

repeatWords("Hola Mundo", 3);

const repeatWord = (words = "", repeat = undefined) => {
  if (!words) return console.warn("No ingresaste un texto");
  if (repeat === undefined)
    return console.warn("No ingresaste el numero de veces");
  if (repeat <= 0)
    return console.error("No puedes ingresar valores negativos o cero ");
  // if(Math.sing(repeat) === -1) return console.error('No puedes ingresar valores negativos o cero ');

  for (let i = 1; i <= repeat; i++) console.log(words);
};

repeatWord("Holaaaa", 2);

// 5) Programa una función que invierta las palabras de una cadena de texto, pe.
// miFuncion("Hola Mundo") devolverá "odnuM aloH".

const reverse = (str = "") => {
  if (!str) return console.warn("No ingresaste un texto");
  if (str === typeof "number") return console.warn("No puede ser un número");
  let newWord = "";
  //La primer es "C", en la segunda iteracion le agrega la "e" = eC
  for (let char of str) newWord = char + newWord;
  console.log(newWord);
};

reverse("Perros");

const invertirCadena = (cadena = "") => {
  !cadena
    ? console.warn("No ingresaste una cadena de texto.")
    : console.info(cadena.split("").reverse().join(""));
};

invertirCadena("Esta es una cadena de texto invertida");

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
//pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const palabraRepetida = (palabras, acierto) => {
  let a = "",
    counter = 0;
  a = palabras.toLowerCase().split(" ");
  for (var i = 0; i < a.length; i++) if (a[i] == acierto) counter++;

  console.log(counter);
};

palabraRepetida("hola adios mundo MUNDO Mundo", "mundo");

// 7) Programa una función que valide si una palabra o frase dada,
//es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const esPalindromo = (palindromo = "") => {
  let newWord = "";
  for (let char of palindromo) newWord = char + newWord;
  console.log(palindromo.toLowerCase() === newWord.toLowerCase());
};

esPalindromo("seres");

const palindrome = (palind = "") => {
  if (!palind) return console.warn("Ingresa alguna palabra");

  palind = palind.toLowerCase();
  let alReves = palind.split("").reverse().join("");

  return palind === alReves
    ? console.info(
        `Si es palíndromo. La palabra original es ${palind}, palabra al revés ${alReves}`
      )
    : console.info(
        `No es palíndromo. La palabra original es ${palind}, palabra al revés ${alReves}`
      );
};

palindrome("Salas");

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
//pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarCaracteres = (texto = "", patron = "") =>
  !texto
    ? console.warn("No ingresaste el texto")
    : !patron
    ? console.warn("No ingresaste el patrón de caracteres")
    : console.info(texto.replace(new RegExp(patron, "ig"), "")); //Reemplaza el texto con algo vacio

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numAleatorio = (a = 0, b = 0) => {
  console.info(Math.round(Math.random() * (b - (a - 1))) + (a - 1));
};

numAleatorio(501, 600);

// 10) Programa una función que reciba un número y evalúe si es capicúa o no
// (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (num = 0) => {
  if (!num) return console.warn("Debes ingresar un número");
  if (typeof num !== "number") return console.error("No es un número");

  let alReves = num.toString().split("").reverse().join("");

  return num.toString() === alReves
    ? console.info(`El número ${num} si es capicúa.`)
    : console.info(`El número ${num} no es capicúa.`);
};

capicua(2020);

// 11) Programa una función que calcule el factorial de un número
// (El factorial de un entero positivo n,
// se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (num = undefined) => {
  if (num === undefined) return console.warn("No ingresaste un número");
  if (typeof num !== "number")
    return console.error("El valor ingresado no es un número");
  if (num === 0) return console.error("El valor no puede ser 0");
  if (Math.sign(num) === -1)
    return console.error("El número no puede ser negativo");

  let factorial = 1;

  for (let i = num; i > 1; i--) {
    factorial = factorial * i;
  }

  return console.info(`El factorial del ${num} es ${factorial}`);
};

factorial(7);
//Recursivo

function factor(n) {
  return n != 1 ? n * factor(n - 1) : 1;
}

console.info(factor(5));

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1)
// o no, pe. miFuncion(7) devolverá true.

const esPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un número");
  if (typeof numero !== "number")
    return console.error("El valor ingresado no es un número");
  if (numero === 0) return console.error("El valor no puede ser 0");
  if (Math.sign(numero) === -1)
    return console.error("El número no puede ser negativo");

  return numero % 2 === 1 && numero / 1 === numero
    ? console.info(`El ${numero} es Primo`)
    : console.info(`El ${numero} es No Primo`);
};

esPrimo(200);

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parImpar = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un número");
  if (typeof numero !== "number")
    return console.error("El valor ingresado no es un número");
  if (numero === 0) return console.error("El valor no puede ser 0");
  // if(Math.sign(num) === -1) return console.error('El número no puede ser negativo');

  return numero % 2 === 1
    ? console.info(`El ${numero} es IMPAR`)
    : console.info(`El ${numero} es PAR`);
};

parImpar(9);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertidor = (unidad = "C", temperatura = 37) => {
  console.log(unidad.toLowerCase());
  console.log(unidad.toLowerCase() !== "c" && unidad.toLowerCase() !== "f");

  if (typeof unidad !== "string")
    return console.warn('Debes insertar una unidad válida. pe: "C" o "F"');
  if (unidad.toLowerCase() !== "c" && unidad.toLowerCase() !== "f")
    return console.error("No es la unidad correcta");

  // !/(C|F)/.test(unidad) Evalua también que solo sean C o F

  //transformar a Centigrados
  let result = null;

  if (unidad.toLowerCase() === "c") {
    result = (temperatura - 32) * (9 / 5);
    return console.info(
      `La temperatura de ${temperatura} °F es ${result.toFixed(2)} °C`
    );
  }

  //transformar a Fahrenheit
  if (unidad.toLowerCase() === "f") {
    result = temperatura * (9 / 5) + 32;
    return console.info(
      `La temperatura de ${temperatura} °C es ${result.toFixed(2)} °F`
    );
  }
};

convertidor("f", 100);

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (base === 2) {
    return console.info(
      `El ${numero} base ${base} = ${parseInt(numero, base)} base 10`
    );
  } else if (base === 10) {
    //convertir un número a binario
    return console.info(
      `El ${numero} base ${base} = ${numero.toString(2)} base 2`
    );
  } else {
    return console.error("El tipo de base a convertir NO es válido");
  }
};

convertirBinarioDecimal(32, 10);

// 16) Programa una función que devuelva el monto final después de aplicar un descuento
// a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const miDescuento = (cantidad = undefined, descuento = 0) => {
  if (cantidad === undefined || descuento === undefined)
    return console.warn("No ingresaste un número");
  if (typeof cantidad !== "number" || typeof descuento !== "number")
    return console.error("El valor ingresado no es un número");
  if (cantidad === 0) return console.error("El valor no puede ser 0");
  if (Math.sign(cantidad) === -1 || Math.sign(descuento) === -1)
    return console.error("El número no puede ser negativo");

  return console.info(
    `Tu monto inicial es ${cantidad} y tu descuento aplicado de ${descuento} es ${
      cantidad - (descuento * cantidad) / 100
    }`
  );
};

miDescuento(1000, 20);

// 17) Programa una función que dada una fecha válida determine cuantos años han
// pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularEdad = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste una fecha");

  if (!fecha instanceof Date)
    return console.error("El valor que ingresaste no es una fecha válida");

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    yearsEnMS = 1000 * 60 * 60 * 24 * 365,
    yearHumanos = Math.floor(hoyMenosFecha / yearsEnMS);

  return Math.sign(yearHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(yearHumanos)} años para el ${fecha.getFullYear()}`
      )
    : Math.sign(yearHumanos) === 1
    ? console.info(
        `Han pasado ${Math.abs(yearHumanos)} años desde ${fecha.getFullYear()}`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
};

calcularEdad(new Date(1988, 7, 29));

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe.
// miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarVocalesConsonantes = (texto = "") => {
  if (
    typeof texto == "number" ||
    typeof texto == "boolean" ||
    typeof texto == "function" ||
    typeof texto == "object" ||
    typeof texto == "array" ||
    typeof texto == null ||
    typeof texto == undefined
  ) {
    console.log("Por favor ingresa una palabra");
    return false;
  }

  let vocales = /[aeiouáéíóúAEIOUÁÉÍÓÚ]/;
  let consonantes = /[bcdfghjklmnpqrstwxyzBCDFGHJKLMNPQRSTWXYZ]/;

  texto = texto.replace(/\s+/g, ""); //Quitar TODOS los espacios

  let letras = texto.split("");
  let contarVocales = 0;
  let contarConsonantes = 0;

  for (let i = 0; i < letras.length; i++) {
    if (vocales.test(letras[i])) contarVocales++;
    if (consonantes.test(letras[i])) contarConsonantes++;
  }

  return console.info(
    `Vocales: ${contarVocales} Consonantes: ${contarConsonantes}`
  );
};

contarVocalesConsonantes("Hola Mundo");

// 19) Programa una función que valide que un texto sea un nombre válido, pe.
// miFuncion("Jonathan MirCha") devolverá verdadero.

const nombreValido = (nombre = "") => {
  let patron = /^[A-Za-záéíóúÁÉÍÓÚÑñ ]+$/g;
  console.log(patron.test(nombre));
};

nombreValido("Marcos Esqueda");

// 20) Programa una función que valide que un texto sea un email válido, pe.
// miFuncion("jonmircha@gmail.com") devolverá verdadero.
const validarEmail = (email = undefinded) => {
  let patron =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

  return patron.test(email)
    ? console.info(`El email ${email}, es correcto`)
    : console.warn(`El email suministrado no tiene formato correcto`);
};

validarEmail("marc_esq_verb@hotmail.com");

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
// pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const potencias = (potenciales = undefined) => {
  if (!potenciales instanceof Array)
    return console.warn("El tipo de dato no es un array");
  if (potenciales.lenght === 0)
    return console.error("El array no debe estar vacio");
  if (potenciales === undefined)
    return console.error("Ingresa un arreglo con números");

  for (let num of potenciales) {
    if (typeof num !== "number")
      return console.error("Ingreses solo valores que sean números");
    if (num === 0) return console.error("Ingreses valores mayores a 0");
  }

  let nuevosValores = potenciales.map((el) => el * el);

  return console.info(nuevosValores);
};

potencias([1, 4, 5]);

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array,
// pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const maxMin = (numeros = undefined) => {
  if (!numeros instanceof Array)
    return console.warn("El tipo de dato no es un array");
  if (numeros.lenght === 0)
    return console.error("El array no debe estar vacio");
  if (numeros === undefined)
    return console.error("Ingresa un arreglo con números");

  for (let num of numeros) {
    if (typeof num !== "number")
      return console.error("Ingreses solo valores que sean números");
    if (num === 0) return console.error("Ingreses valores mayores a 0");
  }

  //...arr separa los valores en 1,2,3
  return console.info([Math.max(...numeros), Math.min(...numeros)]);
};

maxMin([1, 4, 5, 99, -60]);

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los
// números pares y en el segundo los impares, pe.
// miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const objParImpar = (valores = undefined) => {
  if (!valores instanceof Array)
    return console.warn("El tipo de dato no es un array");
  if (valores.lenght === 0)
    return console.error("El array no debe estar vacio");
  if (valores === undefined)
    return console.error("Ingresa un arreglo con números");

  let obj = {
    pares: [],
    impares: [],
  };

  for (let num of valores) {
    if (typeof num !== "number")
      return console.error("Ingreses solo valores que sean números");
    // if(num === 0) return console.error('Ingreses valores mayores a 0');
  }

  valores.filter((el) =>
    el % 2 === 0 ? obj.pares.push(el) : obj.impares.push(el)
  );

  return console.info(obj);

  //Sin crear el objeto
  // return console.info({
  // 	pares: valores.filter(num => num % 2 === 0),
  // 	impares: valores.filter(num => num % 2 === 1)
  // })
};

objParImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
// el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
//pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenar = (arr = undefined) => {
  if (!arr instanceof Array)
    return console.warn("El tipo de dato no es un array");
  if (arr.lenght === 0) return console.error("El array no debe estar vacio");
  if (arr === undefined) return console.error("Ingresa un arreglo con números");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error("Ingreses solo valores que sean números");
    // if(num === 0) return console.error('Ingreses valores mayores a 0');
  }

  //Sin crear el objeto
  return console.info({
    asc: arr.map((el) => el).sort(),
    desc: arr
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

ordenar([7, 5, 7, 8, 6]);

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
//pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const quitarDuplicados = (arr = undefined) => {
  if (!arr instanceof Array)
    return console.warn("El tipo de dato no es un array");
  if (arr.lenght === 0) return console.error("El array no debe estar vacio");
  if (arr.lenght === 1)
    return console.error(
      "El deben haber al menos dos elementos para poder comparar"
    );
  if (arr === undefined) return console.error("Ingresa un arreglo con números");

  return console.info({
    original: arr, //El valor de self se va comparando con el elemento actual en index
    sinDuplicados: arr.filter(
      (value, index, self) => self.indexOf(value) === index
    ),
  });

  // return console.info({
  // 	original: arr,   			//Con set se crea un array sin elementos que se repitan
  // 	sinDuplicados: [... new Set(arr)]
  // })
};

//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const calcularPromedio = (arr = undefined) => {
  if (!arr instanceof Array)
    return console.warn("El tipo de dato no es un array");
  if (arr.lenght === 0) return console.error("El array no debe estar vacio");
  if (arr === undefined) return console.error("Ingresa un arreglo con números");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error("Ingreses solo valores que sean números");
    // if(num === 0) return console.error('Ingreses valores mayores a 0');
  }

  // let result = arr.reduce((sum, current) => sum + current);
  // console.info(`El primedio de datos es: ${result / arr.length}`);

  return console.info(
    //El arr es el arr en si
    //Index es la posición
    //Num es el valor actual
    arr.reduce((total, num, index, arr) => {
      total += num; //El total lleva acumulando todos los valores

      if (index === arr.length - 1) {
        return `El primedio de datos es: ${arr.join(" + ")} es ${
          total / arr.length
        }`;
      } else {
        return total; //total se va acumulando hasta que ya sea igual a arr.length
      }
    })
  );
};

calcularPromedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: 
id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.

  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, 
Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, 

History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  /*Métodos generales*/

  //Este método siempre se debe de llamar como un atributo
  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.info(
      `Los generos aceptados son: ${Pelicula.listaGeneros().join(", ")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor)
      return console.warn(`${propiedad} "${valor}" no puede estar vacio`);

    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" ingresado, no es una cadena texto`
      );

    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud})`
      );

    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor)
      return console.warn(`${propiedad} "${valor}" no puede estar vacio`);

    if (typeof valor !== "number")
      return console.error(
        `${propiedad} "${valor}" ingresado, no es un número`
      );

    return true;
  }

  validarArreglo(propiedad, valor) {
    if (!valor instanceof Array)
      return console.warn("El tipo de dato no es un array");
    if (valor.lenght === 0)
      return console.error("El array no debe estar vacio");
    if (!valor) return console.error("Ingresa un arreglo con números");

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `El valor de la ${cadena} ingresado, no es una cadena de texto`
        );
      // if(num === 0) return console.error('Ingreses valores mayores a 0');
    }

    return true;
  }

  /*Métodos Específicos*/

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.error(`El IMDB id "${id}" no debe tener 9 caracteres, los 2 primeros letras 
			minúsculas y los 7 restantes números`);
    }
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Título", titulo)) {
      this.validarLongitudCadena("Título", titulo, 100);
    }
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director)) {
      this.validarLongitudCadena("Director", director, 50);
    }
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Año de Estreno", estreno)) {
      if (!/^([0-9]){4}$/.test(estreno))
        return console.error(`El año de estreno "${estreno}" no es válido,
			 debe contener solo 4 caracteres numéricos`);
    }
  }

  validarPais(pais) {
    this.validarArreglo("País", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Géneros", generos)) {
      for (let genero of generos) {
        // console.log(genero, Pelicula.listaGeneros().includes(genero) )

        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Género(s) incorrecto(s) ${generos.join(", ")}`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificacion", calificacion)) {
      return calificacion < 0 || calificacion > 10
        ? console.error(
            `La calificación debe de estar en un rango entre 0 y 10`
          )
        : (this.calificacion = calificacion.toFixed(1));
    }
  }

  fichaTecnica() {
    console.info(
      `Ficha Técnica:\nTítulo: "${this.titulo}"\nDirector: "${
        this.director
      }"\nAño: "${this.estreno}"\nPaís: "${this.pais.join(
        "-"
      )}"\nCalificación: "${this.calificacion}"\nIMDB id: ${this.id}`
    );
  }
}

/*

tt0075148
tt0019130
tt4154796
tt4158110

*/

// Pelicula.generosAceptados();

const peli = new Pelicula({
  id: "tt0075148",
  titulo: "Titulo de la peli",
  director: "Director de la peli",
  estreno: 2020,
  pais: ["Venezuela"],
  generos: ["Comedy"],
  calificacion: 5.8,
});

// peli.fichaTecnica();

const misPelis = [
  {
    id: "tt0075148",
    titulo: "Titulo de la peli",
    director: "Director de la peli",
    estreno: 2020,
    pais: ["Venezuela"],
    generos: ["Comedy"],
    calificacion: 5.8,
  },
  {
    id: "tt0075148",
    titulo: "Titulo de la peli 2",
    director: "Director de la peli 2",
    estreno: 2021,
    pais: ["Venezuela", "China"],
    generos: ["Comedy", "Horror"],
    calificacion: 3,
  },
  {
    id: "tt0075148",
    titulo: "Titulo de la peli 3",
    director: "Director de la peli 3",
    estreno: 2020,
    pais: ["USA", "UK"],
    generos: ["Comedy"],
    calificacion: 10,
  },
];

//Callback

const sendMessage = (message, callback) => {
  return callback(message);
};

const strings = ["my", "forEach", "example"];
let result = "";

function spell(str, index, array) {
  if (array.lenght - 1 !== index) {
    result += str + " ";
  } else {
    result += str + "!!!";
  }
}

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

forEach(string, spell);

let result = null;
function callback(str, i, arr) {
  if (arr[i] === str) {
    result = i;
    return i;
  } else {
    result = -1;
    return -1;
  }
}

function findIndex(arr, callback, str) {
  for (let i = 0; i < arr.length; i++) {
    callback(str, i, arr);
  }
}

findIndex(strings, callback, "epa");
console.log(result);

//Otra forma

function callback2(str, i, arr) {
  return str === arr[i];
}

function findIndex2(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(str, i, arr)) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex2(strings, callback2));

function countDown(sec) {
  let int = setInterval(function () {
    sec--;
    if (sec === 0) {
      console.log("Ring Ring Ring!!!");
      clearInterval(int);
    } else {
      console.log("Timer:", sec);
    }
  }, 1000);
}

countDown(3);

// misPelis.forEach(el => new Pelicula(el).fichaTecnica())

//Callbacks Una forma de controlar los llamados asíncronos

// function cuadradoCallback(value, callback) {
// 	setTimeout(() => {

// 		callback(value, value *  value);

// 	}, 0 | Math.random() * 100);
// }

// cuadradoCallback(0, (value, result) => {
// 	console.log('Inicia Callback');
// 	console.log(`Callback: ${value}, ${result}`);

// 	cuadradoCallback(1, (value, result) => {

// 		console.log(`Callback: ${value}, ${result}`);

// 		cuadradoCallback(2, (value, result) => {

// 			console.log(`Callback: ${value}, ${result}`);

// 		});

// 	});

// });

//Promesas

//funcion para probar las busquedas en una promesa
const heroes = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
  },
];

const findHeroById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

const getHero = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = findHeroById(id);
      hero ? resolve(hero) : reject("heroe no encontrado");
    }, 2000);
  });
};

getHero(2);

function cuadradoPromise(value) {
  if (typeof value !== "number") {
    //se va directo al catch y si el error ocurre en cualquier parte se detine las siguientes ejecuciones
    return Promise.reject(`Error, el valor ${value}, no es un número`);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 100));
  });
}

// cuadradoPromise(0)
// 	.then(obj => {
// 		console.log('Inicio de Promesa');
// 		console.log(`Promise: ${obj.value}, ${obj.result}`);
// 		return cuadradoPromise(1);
// 	})
// 	.then(obj => {

// 		console.log(`Promise: ${obj.value}, ${obj.result}`);
// 		return cuadradoPromise(2);
// 	})
// 	.then(obj => {

// 		console.log(`Promise: ${obj.value}, ${obj.result}`);
// 		return cuadradoPromise(3);
// 	})
// 	.then(obj => {

// 		console.log(`Promise: ${obj.value}, ${obj.result}`);
// 		console.log('Fin de la promesa')
// 	})
// 	.catch(err => console.error(err));

const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting stuff from youtube");
    resolve({ videos: [1, 2, 3, 4] });
  }, 2000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting stuff from fb");
    resolve({ user: "Name" });
  }, 2000);
});

//Obtener los resultados de ambas promesas
Promise.all([yt, fb]).then((result) => console.log(result));

let Stoks = {
  Fruits: ["Fresa", "Anana", "Parchita", "Banana"],
  liquid: ["agua", "ice"],
  holder: ["cono", "galleta", "paleta"],
  toppings: ["chocolate", "mani"],
};

let is_shop_open = true;

// let order = (time, work) => {
// 	return new Promise((resolve, reject) => {
// 		if(is_shop_open){

// 			setTimeout(() => {
// 				resolve(work())

// 			}, time);

// 		}else {
// 			reject(console.log('The shop is closed'))
// 		}
// 	} )
// }

// order(2000, () => console.log(`${Stoks.Fruits[2]} was selected`))
// 	.then( () =>{ return order(0, () => console.log(`Prod has started`)) })
// 	.then( () =>{ return order(2000, () => console.log(`the fruit was chopper`)) } )
// 	.then( () =>{ return order(1000, () => console.log(` ${Stoks.liquid[0]} and ${Stoks.liquid[1]} was selected`))})
// 	.then( () =>{ return order(1000, () => console.log(`Start the machine`))})
// 	.then( () =>{ return order(2000, () => console.log(` ice cream placed on ${Stoks.holder[1]}`))})
// 	.then( () =>{ return order(3000, () => console.log(`${Stoks.toppings[1]} was selected`))})
// 	.then( () =>{ return order(1000, () => console.log(`The ice cream was served`))})
// 	.catch(()=> {
// 		console.log('Costumer left');
// 	})
// 	.finally( ()=> console.log("day ended, shop is closed"))

//Encadenado de Promesas
let counter = 0;
//la funcion solo se encarga de aumentar el valor del counter
function incCounter() {
  counter++;
  console.log("Counter:", counter);
}

function runLater(callback, timeInMs) {
  let p = new Promise(function (resolve, reject) {
    setTimeout(() => {
      //llamdada al func incCounter
      let res = callback();
      resolve(res);
    }, timeInMs);
  });

  return p;
}
//Se encadena cuantas veces sea necesario
runLater(incCounter, 1000)
  .then(function () {
    return runLater(incCounter, 2000);
  })
  .then(function () {
    return runLater(incCounter, 3000);
  });

//HTTPRequest

let XHR = new XMLHttpRequest();
XHR.onreadystatechange = function () {
  console.log(XHR.readyState);
  if (XHR.readyState === 4) {
    //Si la respuesta es un JSON
    let data = JSON.parse(XHR.responseText);
    if (XHR.status == 200) {
      console.log(XHR.responseText);
    } else {
      console.log("Hubo un problema");
    }
  }
};
XHR.open("GET", "https://api.github.com/zen");
XHR.send();

//Usando async await

let time = (ms) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
};

async function makeIceCream() {
  try {
    await time(2000);
    console.log(`${Stoks.Fruits[1]} was selected`);
    await time(0);
    console.log(`Prod has started`);
    await time(1000);
    console.log(` ${Stoks.liquid[0]} and ${Stoks.liquid[1]} was selected`);
    await time(1000);
    console.log(`Start the machine`);
    await time(2000);
    console.log(` ice cream placed on ${Stoks.holder[1]}`);
    await time(3000);
    console.log(`${Stoks.toppings[1]} was selected`);
    await time(1000);
    console.log(`The ice cream was served`);
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day ended, shop is closed");
  }
}

makeIceCream();

async function funcionAsincronaDeclarada() {
  try {
    console.log("Inicio Async Function");

    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(3);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.warn("Fin de la ejecución");
  } catch (err) {
    console.error(err);
  }
}

// funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async () => {
  try {
    console.log("Inicio Async Function");

    let obj = await cuadradoPromise(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(6);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(7);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.warn("Fin de la ejecución");
  } catch (err) {
    console.error(err);
  }
};

// funcionAsincronaExpresada();

function setUser(user, email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ user, email });
    }, 2000);
  });
}

async function getUserInfo() {
  try {
    const userLogged = await setUser("Marcos", "mar@gmai.com");
    console.log(userLogged.user);
  } catch (error) {
    console.log(error);
  }
}

getUserInfo();

const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();

  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });

  //se usa una funcion para poder obtener los datos
  postToWeb(userEmailArray);
};

const postToWeb = (data) => {
  console.log(data);
};

getAllUserEmails();

const obj = {
  id: "ajhajha",
  name: "Marcos",
};

const postData = async (obj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  const jsonResponse = await response.json();

  console.log(jsonResponse);
};

postData(obj);

const getDataFromForm = () => {
  const rObj = {
    firstname: "Bruce",
    lastname: "Lee",
    categories: ["nerdy"],
  };

  return rObj;
};

const buildRequestUrl = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstname}&lastname=${requestData.lastname}&limitTo=${requestData.categories}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke();

  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

//La funcion controla el flujo de los demas
const processJokeRequest = async () => {
  const rdata = getDataFromForm();
  const rurl = buildRequestUrl(rdata);
  await requestJoke(rurl);
  console.log("finished!");
};

processJokeRequest();

//Symbols = para crear métodos o propiedad de objetos que sea privados.

const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const persona = {
  [NOMBRE]: "Mar", //Así se hace referencia a un simbolo para un objeto
};

persona.NOMBRE = "Marcos"; //Crea una propiedad más en el objeto pero no como simbolo

persona[SALUDAR] = function () {
  console.log("Hola");
};
console.log(persona);

persona[SALUDAR]();

console.log(Object.getOwnPropertySymbols(persona));

//Sets tipo de dato que no acepta valores repetidos en una estructura parecida a un array.

const set = new Set([1, 2, 3, 4, 4, true, false, true, {}, {}, "hola", "HOLA"]);

// console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(1);
set2.add(2);
set2.add(true);
set2.add(false);
set2.add({});

// console.log(set2);

// for(item of set) {
// 	console.log(item);
// }

set2.forEach((item) => console.info(item));

//pasar un set a array
let arr = Array.from(set);
// console.log(arr)

set.delete("HOLA");

// console.log(set);
// console.log(set.has('hola'));

set2.clear();

//Maps

let mapa = new Map();
mapa.set("nombre", "Marc");
mapa.set("apellido", "Esq");
mapa.set("edad", 32);
console.log(mapa);
console.log(mapa.has("correo"));
console.log(mapa.get("nombre"));
mapa.set("nombre", "Marcos");
mapa.delete("apellido");

mapa.set(19, "diecinueve");
mapa.set(false, "falso");
mapa.set({}, {});

for (let [key, value] of mapa) {
  console.log(`Llave: ${key}, ${value}`);
}

const mapa2 = new Map([
  ["nombre", "Suzy"],
  ["edad", 4],
]);

//Hacer destructuring de los valores
const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

//WeakSet y WeakMap
const ws = new WeakSet();
let valor1 = { valor: 1 };
let valor2 = { valor: 2 };
let valor3 = { valor: 3 };

ws.add(valor1);
ws.add(valor2);

// console.log(ws.has(valor1));
ws.delete(valor2);
ws.add(valor3);

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
// console.log(wm);
// console.log(wm.has(llave1));
wm.delete(llave2);

setTimeout(() => {
  llave1 = null;
  llave2 = null;
  llave3 = null;
}, 5000);

//Iterators

const iterable = [1, 2, 3, 4];
// const iterable = 'Hola Mundo';
// const iterable = new Set([1, 2, 3, 4]);
// const iterable = new Map(['nombre','Jon'], ["edad", 32] );

const iterador = iterable[Symbol.iterator]();

console.log(iterador);

let next = iterador.next();
//Para recorrer todos los elementos en el iterador
while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}

//Generadores

function* iterar() {
  yield "hola";
  console.log("hola consola");

  yield "hola 2";
  console.log("seguimos con mas instrucciones en el código");
  yield "hola 3";
  yield "hola 4";
}

//Por cada siguiente llamado a la funcion, se retorna un valor siguiente que este en cada yield
let iterando = iterar();
console.log(iterando.next());
console.log(iterando.next());
console.log(iterando.next());
console.log(iterando.next());
console.log(iterando.next());

for (let y of iterando) {
  console.log(y);
}
//transformar en array un generador
const arrIter = [...iterar()];
console.log(arrIter);

function cuadrado(valor) {
  setTimeout(() => {
    // console.log({valor, resultado: valor * valor} )
  }, Math.random * 1000);

  return { valor, resultado: valor * valor };
}

function* generador() {
  console.log("Inicia Generador");

  yield cuadrado(0);
  yield cuadrado(2);
  yield cuadrado(4);
  yield cuadrado(6);

  console.log("Fin Generador");
}

let gen = generador();
for (let y of gen) {
  console.log(y);
}

//Proxies (generar una copia de un objeto)

const person = {
  nombre: "",
  apellido: "",
  edad: 0,
};

const manejador = {
  set(obj, prop, valor) {
    //Verifica si no existe una propiedad en el objeto
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(
        `La propiedad "${prop}" no existe en el objeto persona`
      );
    }

    if (
      (prop === "nombre" || prop === "apellido") &&
      !/^[A-Za-záéíóúÁÉÍÓÚÑñ ]+$/g.test(valor)
    ) {
      return console.error(
        `La propiedad "${prop}" solo acepta letras y espacios en blanco`
      );
    }

    obj[prop] = valor;
  },
};

const mar = new Proxy(person, manejador);
mar.nombre = "Marcos";
mar.apellido = "Esq";
mar.edad = 32;
mar.twitter = "@bymarcant";
console.log(mar);
console.log(person);

//Propiedades dinámicas de los objetos

const aleatorio = Math.round(Math.random() * 100 + 5);
const objUsuarios = {
  [`id_${aleatorio}`]: "Valor Aleatorio",
};

const usuarios = ["Mar", "Camila", "Maria", "Lucy"];
usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario));

console.log(objUsuarios);

//This

console.log(this === window);
this.nombre = "Contexto global";
console.log(this.nombre);

//imprime el contexo global
function imprimir() {
  console.log(this.nombre);
}

imprimir(); //contexto global

//El contexto se encuentra solo aquí o en estructuras {}
const objeto = {
  nombre: "Contexto Objeto",
  imprimir,
};

objeto.imprimir();

const objeto2 = {
  nombre: "Contexto Objeto 2",
  imprimir: function () {
    console.log(this.nombre); //Contexto del objt
  },
};
// objeto2.imprimir()

const obj3 = {
  nombre: "Contexto Objeto ",
  imprimir: () => {
    console.log(this.nombre);
  },
};
// obj3.imprimir(); //Contexto global

//Funcion constructora
function Persona(nombre) {
  this.nombre = "Marc";
  // return console.log(this.nombre);

  //El contexto es global cuando se retorna una funcion o crea un nuevo contexto
  return function () {
    console.log(this.nombre);
  };

  //asi retorna el valor interno de this
  // return () => console.log(this.nombre, 77);
}

let mare = new Persona("Mar");
// console.log(mare);

mare(); //Se ejecuta como funcion porque retorna una funcion

//Call apply bind
this.lugar = "Contexto Global";
function saludar(saludo, aquien) {
  console.log(`Saludo a ${saludo} ${aquien} desde el ${this.lugar}`);
}

// saludar();

const ob2 = {
  lugar: "Contexto Obj",
};

//Le asigna a la funcion el contexto al local del objeto en vez del local
saludar.call(ob2, "Hola", "Marcos");
// saludar.call(null, 'Hola', 'Marcos'); //Lo regresa al contexto global
// saludar.call(this, 'Hola', 'Marcos'); //Lo regresa al contexto global
saludar.apply(ob2, ["Adiós", "Luis"]);
// saludar.apply(this, ['Adiós', 'Luis']); //Lo regresa al contexto global
// saludar.apply(null, ['Adiós', 'Luis']); //Lo regresa al contexto global

this.nombre = "Window";
const unaPersona = {
  nombre: "Mar",
  saludar: function () {
    //aquí entra en el contexto del objeto
    console.log(`Hola ${this.nombre}`);
  },
};

unaPersona.saludar();

const otraPersona = {
  //Aquí le asigna el contexto global unaPersona que antes era local, pero con bind se lo asigna al global para esta funcion
  saludar: unaPersona.saludar.bind(this),
};

otraPersona.saludar();

//JSON
const json = {
  nombre: "Marcos",
  edad: 32,
  boolean: true,
  arreglo: [1, 2, 3],
  objeto: { twitter: "@bymarcant", email: "bymarcant@gmail.com" },
  nulo: null,
};
//Tranfomar a texto, un objeto json
console.log(JSON.stringify(json));

//Tranforma un string a un objeto o el formato que se le pase
console.log(JSON.parse("[1, 2, 3]"));
