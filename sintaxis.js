// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


// Comentario

/*
* Bloque de comentario 
*/

console.log("Este es un ejemplo NT2")

// camelCase es preferido para trabajar con JS. 
// Comilla dobles para cadenas de texto.

const firstName = "Pedro"

// Comillas simples para cadenas

const lastName = 'Perez'

// los arays pueden ser declarados en linea
var array1 = [1,4,6,3]


// podemos tener distintos tipos de datos dentro de un array.
let array_especial = [
  'cadena',
  45,
  function() { console.log("Hola mundo!!!!")}
]

console.log(firstName)
console.log(array1)
console.log(array_especial)

// retorno del elemento (array_especial) en la posicion 2 y lo invoco array_especial[2]
array_especial[2]()




