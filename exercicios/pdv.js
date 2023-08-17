/**
 * PDV - Ponto de Vendas
 */

//importando módulo
const read = require(`readline-sync`)
//variável
let total, desconto, valor, dinheiro, troco

console.clear()
console.log("  ____   ____    __  __    ")
console.log("/\\  _`\\\ /\\  _`\\\ /\\ \\/\\ \\   ")
console.log("\\ \\ \\L\\\\\\ \\ \\\/\\ \\ \\ \\ \\ \\  ")
console.log(" \\ \\ ,__/\\\\\\ \\ \\\ \\ \\ \\ \\ \\ ")
console.log("  \\ \\ \\/  \\ \\ \\_\\\ \\ \\ \\_/ \\")
console.log("   \\ \\_\\   \\ \\____/\\`\\___/")
console.log("    \\/\\_/    \\/___/ `\\/__/ ")
console.log("                           ")
//entrada 1
valor = Number(read.question ("Digite o vaor total da compra: ").replace("," , "."))
desconto = Number(read.question ("Digite o valor do desconto: ").replace("," , ".") )
//processamento 1
total = valor - ( (desconto * valor) / 100 )
//saída
console.log(`total: R$ ${total.toFixed(2)}`)
console.log(" ")
console.log("______________________________")
//entrada2
dinheiro = Number(read.question("Digite o valor pago: ").replace("," , "."))
//processamento2
troco = dinheiro - total
//saída2
console.log(`Troco: R$ ${troco.toFixed(2)}`)