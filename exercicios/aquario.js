/**
 * Cálculo do volume de um aquerio 
 */

const read = require ('readline-sync')

let comprimento, altura, largura, volume

console,clear
console.log("Cálculo do volume de um aquario")

comprimento = Number(read.question("Digite o comprimento do aquqrio em cm: ").replace("," , "."))

largura = Number (read.question("Digite a largura do aquario em cm: ").replace("," , "."))

altura = Number(read.question("Digite a altura do aquario em cm: ").replace("," , "."))

volume =((comprimento * largura)* altura )