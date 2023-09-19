/**
 * EXEMPLO DE USO DO LAÇO FOR - TABUADA
 */

const read = require ('readline-sync')
const colors = require ('colors')

let valor

console.clear
console.log("* - * TABUADA - * -".magenta)
valor = Number(read.question("Digite o valor da tabuada: "))
console.log(" ")

for (let i = 1; i < 11; i++) {
    console.log(`${valor} x ${i} = ${valor * i}`.blue)
}
console.log("* - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * -")