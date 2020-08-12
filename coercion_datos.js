const x = 17;

const explicito = String(x); // explicito === "17"

const implicito = x + ""; // implicito === "17"

console.log(x == "17")
console.log(x === "17")

const invalido = null

console.log(invalido == undefined)
console.log(invalido === undefined)