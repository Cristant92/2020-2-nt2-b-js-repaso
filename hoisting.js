//la declaracion saludo () es movido por el interprete Al principio. 

// Funcion invocada
saludo()

debeAndar()

estaNoDebeAndar()
/////////

function saludo(){
  console.log("Hello world!");
}

function debeAndar(){
  console.log("Las funcones estan declaradas al inicio del ambito")
}

var estaNoDebeAndar = function() {
  console.log(" Esta funcion no esta declarada al principio")
}

//debeAndar()
//estaNoDebeAndar()