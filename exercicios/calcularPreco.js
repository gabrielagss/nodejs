/**
 * > > > EXERCÍCIO 6 > > >
 * Desenvolver um APP para calcular o preço de venda 
 * de umproduto em função de custo e margem de lucro(%)
 * EXEMPLO: custo: 30,00 | lucro: 50% | venda: 45$
 */
const read = require ('readline-sync')
let custo, lucro, venda

console.clear
console.log(" ")
console.log(" - - - - - - - - - - - - - -")
console.log("- - Calculadora de lucro - -")
console.log(" - - - - - - - - - - - - - -")

custo = Number(read.question("Digite o valor do produto: ").replace("," , "."))
lucro = Number(read.question("Digite o valor do lucro(%): ").replace("," , "."))
venda = custo + (lucro * custo) / 100

console.log(`O valor da venda vai ser de: ${venda.toFixed(2)} R$`)