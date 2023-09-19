/**
 *  ESTUDO DO LAÇO FOR (USO DE 2 LAÇOS)
 */
const read = require ('readline-sync')
const colors = require ('colors')

console.log("* - * TABUADA - * -".magenta)
console.clear()
for (let i = 1; i < 11; i++) {
    console.log("- - - - - - - -  - - - -  - -")
    console.log(`        Tabuada do ${i}`.yellow)
    console.log("- - - - - - - -  - - - -  - -")
    for (let j = 1; j < 11; j++) {
        console.log(`${i} X ${j} = ${i * j}`.blue)
    }
}