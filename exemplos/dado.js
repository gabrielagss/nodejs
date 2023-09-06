/**
 *  JOGO DO DADO
 */

const read = require('readline-sync')

let face

console.clear()
console.log(" - - - - Jogue o dado - - - -  ")
read.question("Pressione qualquer enter para lancar o dado: ")
face = Math.floor(Math.random() * 6 + 1)//0 1 2 3 4 5 6 
switch (face) {
    case 0:
        console.log(" _______")
        console.log("|       |")
        console.log("|   0   |")
        console.log("|_______|")
        console.log(" ")
        break
    case 1:
        console.log(" _______")
        console.log("| 0     |")
        console.log("|       |")
        console.log("|_____0_|")
        console.log(" ")
        break
    case 2:
        console.log(" _______")
        console.log("| 0     |")
        console.log("|   0   |")
        console.log("|_____0_|")
        console.log(" ")
        break
    case 3:
        console.log(" _______")
        console.log("| 0   0 |")
        console.log("|       |")
        console.log("|_0___0_|")
        console.log(" ")
        break
    case 4:
        console.log(" _______")
        console.log("| 0   0 |")
        console.log("|   0   |")
        console.log("|_0___0_|")
        console.log(" ")
        break
    case 5:
        console.log(" _______")
        console.log("| 0   0 |")
        console.log("| 0   0 |")
        console.log("|_0___0_|")
        console.log(" ")
        break
}


