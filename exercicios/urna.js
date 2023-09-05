/**
 *  ELEITOR - OBRIGATORIDADE VOTAR
 */

const read = require('readline-sync')
let idade

console.clear()
console.log(" ")
console.log(" > > > > > > > > > > > > > > > > > > ")
console.log(" > > > > > > > ELEITOR > > > > > > > ")
console.log(" > > > > > > > > > > > > > > > > > > ")
console.log(" ")

idade = Number(read.question("Digite a sua idade: "))

if (idade < 16) {
    console.log("PROIBIDO VOTAR ! ")
} else if (idade > 17 && idade < 71) {
    console.log("VOTO FACULTATIVO")
} else {
    console.log("VOTO OBRIGATORIO ! ")
}
