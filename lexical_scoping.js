if (true){
  var ambito = "Esta variable estara hasta el final de la funcion/codigo ejecutandose"
}

console.log(ambito)

if (true){
  let blockscoped  = "Esta variable estara solo dentro de esta instruccion"

  console.log(blockscoped)

  const otroBlockScoped = "Esta tampoco estará disponible "

  console.log(otroBlockScoped)
}

// Esta variable NO existe en este ambito
console.log(typeof blockscoped)

// Esto es una variable
thisIsAVariable = 50

console.log(thisIsAVariable)

const thisIsAConst = 100

//thisIsAConst++

//Los objetos de constantes son mutables

const obj = { a : 'a'}

console.log(obj)

obj.a = "b"

console.log(obj)