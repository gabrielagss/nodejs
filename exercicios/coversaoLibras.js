/**
 * > > > EXERCÍCIO 5 > > >
 * Desenvolver um APP que converta LIBRAS em KILOS
*/

const read = require('readline-sync')
let libra, kilo

console.clear
console.log(" ")
console.log(" > > > > > > > > >  > > > > > > > > >  > > > > > > > > > ")
console.log(" > > > > > > >  CONVESOR DE LIBRA PARA KILO > > > > > > >")
console.log(" > > > > > > > > > > > > > > > > > >  > > > > > > > > > > ")
console.log(" ")    

libra = Number(read.question("Digite um peso em libras:").replace("," , "."))
kilo = libra / 2.2046

console.log(`O peso em kilos é de: ${kilo.toFixed(2)}`)