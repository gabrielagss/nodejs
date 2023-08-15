/**
 * Conversor de temperatura de FAHRENHEINT PARA CELSIUS
 */

const read = require ('readline-sync') //Biblioteca importada = captura dados no terminal 
let fahrenheit, celsius 
//entrada

console.clear
console.log(" ")
console.log("  .--.                                                    .-.      ")
console.log(" : .--'                                                   : :      ")
console.log(" : :    .--. ,-.,-..-..-. .--. .--.  .--.  .--. .--.    .-' : .--. ")
console.log(" : :__ ' .; :: ,. :: `; :' '_.': ..'`._-.'' .; :: ..'  ' .; :' '_.'")
console.log(" `.__.'`.__.':_;:_;`.__.'`.__.':_;  `.__.'`.__.':_;    `.__.'`.__.'")
console.log("                                                                   ")
console.log("                                                                   ")
console.log(" .-----.                                     .-.                   ")
console.log(" `-. .-'                                    .' `.                  ")
console.log("   : : .--. ,-.,-.,-..---.  .--. .--.  .--. `. .'.-..-..--.  .--.  ")
console.log("   : :' '_.': ,. ,. :: .; `' '_.': ..'' .; ; : : : :; :: ..'' .; ; ")
console.log("   :_;`.__.':_;:_;:_;: ._.'`.__.':_;  `.__,_;:_; `.__.':_;  `.__,_;")
console.log("                     : :                                           ")
console.log("                     :_;                                           ")
console.log(" ")


fahrenheit = Number(read.question ("Digite a temperatura de fahrheit:"))
//processamento
celsius = (fahrenheit - 32) / 1.8
//saída
console.log(`Temperatura em Celsius: ${celsius.toFixed(1)}ºC`)

/**
 * fahrenheit = read.question ('Digite a temperatura de fahrhei:')
   console.log("fahrenheit - 32 / 1.8")

   o que eu tinha feito 
 */

