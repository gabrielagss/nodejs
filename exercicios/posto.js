/**
 * Calculadora de etanol e gasolina
 */

const read = require('readline-sync')
const colors = require('colors')
let etanol, gasolina

console.clear()
console.log("- - - - - - - - - - - - - - ")
console.log("Calculo de etanol e gasolina")
console.log("- - - - - - - - - - - - - - ")
console.log(" ")
//entrada
etanol = Number(read.question("Qual o preco do etanol: ").replace(",", "."))
gasolina = Number(read.question("Qual o preco do gasolina: ").replace(",", "."))
//processamento/saída
if (etanol / gasolina < 0.7) {
    console.log("Abastecer com Etanol".green)
} else {
    console.log("Abastecer com Gasolina".red)
}


