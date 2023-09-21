/**
 * ESTUDO DAS ESTRTARAS DE CONTROLE
 * WHILE | DO WHILE
 */

const read = require ('readline-sync')
let X = 10
let Y = 19
//se a condição não for verdaeira não a repetição (condição)
while (X > 0) {
    //console.log("Teste da estrutura WHILE")
    console.log(X)
    X--
    // acrecenta sempre +1 até atingir o número definido
} 
read.question("Precione {ENTER} para continuar")
console.clear
console.log(" * - * - * - * - * - * - * - * - * - * - * - * - * - * - * - ")

do {
    console.log("Teste da estrututa DO WHILE")
} while(Y < 11 )