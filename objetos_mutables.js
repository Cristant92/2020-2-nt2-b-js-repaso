// Objetos mutables

const o1 = {
  a : 'a',
  b: 'b',
  obj: {
    key: 'key'
  }
}

const o2 = o1

//console.log(o1,o2)

o2.a = 'Nuevo valor'

// o y o2 hacen referencia al mismo objeto
//console.log(o1, o2)


// Esto copia o1 en o3. (sin referencia)
const o3 = Object.assign({}, o1)

//console.log(o3)

o3.a = "Un valor independiente"

console.log(o1,o2,o3)







/**
 * 
 * Deep Copy.
 *
 */
// Copiado en cascada

function deepCopy(obj) {
  // verifica si los valores son objetos
  // Si son objetos copio ese objeto a sí mismo
  // Sino retorno el valor
  const keys = Object.keys(obj)

  const newObject = {}

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (typeof obj[key] === 'object') {
      newObject[key] = deepCopy(obj[key])
    } else {
      newObject[key] = obj[key]
    }
  }

  return newObject
}


const o4 = deepCopy(o1)

console.log(o4)

o1.obj.key = "KEY ALTERADO"

console.log(o1,o2,o3)
console.log(o4)