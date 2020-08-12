/****
 * 
 * OBJETOS
 * 
 */

const o = new Object()

o.firstName = 'Daniel'
o.lastName = 'Guzman'
o.isTeaching = true
o.saludo = function() {
  console.log("Hello world!")
}


console.log(o)
/*
o.clase = "NT2"

console.log(o)

delete o.clase

console.log(o)
*/

// Convierte un objeto a cadena
let cadena_objeto = JSON.stringify(o)
console.log(cadena_objeto)

// Convertimos una cadena a objeto (cadena de objeto)
cadena_objeto = JSON.parse(cadena_objeto)
console.log(cadena_objeto)


const o2 = {}
o2["firstName"] = "Ana"
o2["lastName"] = "Perez"
console.log(o2)


const a = 'lastName'

o2[a] = 45555
console.log(o2)

const o3 = {
  firstName: "Daniel",
  lastName: "Perez",
  saludo: function() {
    console.log("Hola, soy Daniel")
  },
  direccion: {
    calle: "Av Libertador",
    numero: "6700"
  }
}

console.log(o3)
