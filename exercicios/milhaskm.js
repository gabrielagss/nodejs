/**
 * Conversão de velocidades (MILHAS - KM/H)
 */

const read = require ('readline-sync') 
let milhas, km

console.clear
console.log(" ")
console.log("#    # # #      #    #   ##    ####              #    # #    # ")
console.log("##  ## # #      #    #  #  #  #                  #   #  ##  ## ")
console.log("# ## # # #      ###### #    #  ####     #####    ####   # ## # ")
console.log("#    # # #      #    # ######      #             #  #   #    # ")
console.log("#    # # #      #    # #    # #    #             #   #  #    # ")
console.log("#    # # ###### #    # #    #  ####              #    # #    # ")
console.log(" ")

milhas = Number(read.question("Digite sua velocidade em milhas: ").replace("," , "."))
km = milhas * 1.60934

console.log(`velocidade em km/h: ${km.toFixed(2)}`)