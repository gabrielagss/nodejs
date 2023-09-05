/**
 * Cálculo da área e perimetro de retangulo
 */

const read = require('readline-sync')

let base, altura, area, perimetro 

console.clear( )
console.log("Retângulo")
console.log(" ")
console.log(" ________________")
console.log("|                |")
console.log("|                | altura")
console.log("|________________|")
console.log("       base       ")
console.log(" ")

altura = Number (read.question("Digite a largura de tecio: ").replace("," , "."))
base = Number (read.question("Digite o valor da base: ").replace("," , "."))

area = base * altura

perimetro = base + altura + base + altura

console.log(`Àrea do retângulo: ${area.toFixed(2)}Metros quadrados`)
console.log(`Perimetro do retâmgulo: R$ ${perimetro.toFixed(2)}Metros`)