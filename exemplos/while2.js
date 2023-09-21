/**
 * ESTUDO DAS ESTRTARAS DE CONTROLE
 * WHILE | DO WHILE
 */

const read = require ('readline-sync')
let X = 1
let Y = 1
//se a condição não for verdaeira não a repetição (condição)
while (X < 11 ) {
    console.log("Teste da estrutura WHILE")
    X++
    // acrecenta sempre +1 até atingir o número definido
} 
read.question("Precione {ENTER} para continuar")
console.clear
console.log(" * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - ")

do {
    console.log("Teste da estrututa DO WHILE")
    Y++
} while(Y < 11 )
console.log(" * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - ")