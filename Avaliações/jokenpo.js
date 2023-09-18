const read = require("readline-sync")
const colors = require('colors')

let escolha, computador

console.clear()
console.log("*-*-*-JoKenPo*-*-*-")
console.log("1. Pedra".blue)
console.log("2. Tesoura".red)
console.log("3. papel".green)
escolha = Number(read.question("Digite a opcao desejada: "))
computador = Number(read.question("Digite a opcao desejada para a maquina: "))

if (escolha == 1) {
    console.log(`Jogador escolheu pedra`)
} else if (escolha == 1) {
    console.log("Jogador escolheu tesoura")
} else {
    console.log("Jogador escolheu papel")
}

console.clear()
if (computador == 1) {
    console.log(`Computador escolheu pedra`.yellow)
} else if (computador == 1) {
    console.log("Computador escolheu tesoura".yellow)
} else {
    console.log("Computador escolheu papel".yellow)
}

if(escolha==computador){
    console.log("EMPATE!".blue)
}else if(escolha == 1 && computador == 3||escolha == 2 && computador == 1||escolha == 3 && computador == 2){
    console.log("JOGADOR VENCE!!".green)
}else{
    console.log("COMPUTADOR VENCE!!".red)
}