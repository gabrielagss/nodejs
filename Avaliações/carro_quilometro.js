/**
 *      EXERCÍCIO 12 
 * QUANTOS QUILÔMETROS POSSO RODAR
 */

const read = require ('readline-sync')
let km, litro, km_l
let carro = 10

console.clear
console.log(" ")
console.log("  _____    _____  ______  __   _ _____  _____ ")
console.log(" |     |  |     | |_____| | \\  |   |   |     |")
console.log(" |____\\|  |_____| |     | |  \\_|   |   |_____|")
console.log("                                              ")
console.log(" _____  _     _ _____         _____  _______ _______ _______  ______   _____ ______")
console.log("|     | |     |   |   |      |     | |  |  | |______    |    |_____// |     ||_____ ")
console.log("|____\\| |_____| __|__ |_____ |_____| |  |  | |______    |    |    \    |_____|______|")
console.log("                                       ")
console.log(" _____   _____  _______ _______  _____ ")
console.log("|_____] |     | |______ |______ |     |")
console.log("|       |_____| ______| ______| |_____|")
console.log("                                       ")
console.log(" ______  _____   _____   _______  ______")
console.log("|_____/ |     | |     \\  |_____| |_____/")
console.log("|    \_  |_____| |_____/  |     | |    \_")
console.log(" ")

km = Number (read.question("Digite o quilometro que deseja percorrer: ").replace("," , "."))
litro = Number (read.question("Digite quantos litros que voce abasteceu: ").replace("," , "."))
km_l = (km * litro) / carro
console.log(" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -")
console.log(`Voce pode percorrer: " ${km_l.toFixed(2)} km`)