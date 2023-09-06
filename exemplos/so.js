/**
 *  EXEMPLO DE USO DA EXTRUTURA SWITCH CASE
 */

const read = require('readline-sync')

let opcao

console.clear
console.log(" ")
console.log("Sistema operacional")
console.log(" ")
console.log("1. Windows")
console.log("2. Linux ")
console.log("3. Mac ")
console.log(" ")

opcao = Number(read.question("Escolha um sistema operacional: "))

switch (opcao) {
    case 1:
        console.clear()
console.log("       ....iilllllllllllll")
console.log("        ....iillll  lllllllllllllllllll")
console.log("    iillllllllllll  lllllllllllllllllll")
console.log("    llllllllllllll  lllllllllllllllllll")
console.log("    llllllllllllll  lllllllllllllllllll")
console.log("    llllllllllllll  lllllllllllllllllll")
console.log("    llllllllllllll  lllllllllllllllllll")
console.log("    llllllllllllll  lllllllllllllllllll")
console.log("                                       ")
console.log("    llllllllllllll  lllllllllllllllllll")
console.log("    llllllllllllll  lllllllllllllllllll")
console.log("    llllllllllllll  lllllllllllllllllll")
console.log("    llllllllllllll  lllllllllllllllllll")
console.log("    llllllllllllll  lllllllllllllllllll")
console.log("    `^^^^^^lllllll  lllllllllllllllllll")
console.log("          ````^^^^  ^^lllllllllllllllll")
console.log("                         ````^^^^^^llll")
console.log(" ")
        break
    case 2:
        console.clear()
console.log("        .88888888:.")
console.log("        88888888.88888.")
console.log("      .8888888888888888.")
console.log("      888888888888888888")
console.log("      88' _`88'_  `88888")
console.log("      88 88 88 88  88888")
console.log("      88_88_::_88_:88888")
console.log("      88:::,::,:::::8888")
console.log("      88`:::::::::'`8888")
console.log("     .88  `::::'    8:88.")
console.log("    8888            `8:888.")
console.log("  .8888'             `888888.")
console.log(" .8888:..  .::.  ...:'8888888:.")
console.log(".8888.'     :'     `'::`88:88888")
console.log(".8888        '         `.888:8888.")
console.log("888:8         .           888:88888")
console.log(".888:88        .:           888:88888:")
console.log("8888888.       ::           88:888888")
console.log("`.::.888.      ::          .88888888")
console.log(".::::::.888.    ::         :::`8888'.:.")
console.log("::::::::::.888   '         .::::::::::::")
console.log("::::::::::::.8    '      .:8::::::::::::.")
console.log(".::::::::::::::.        .:888:::::::::::::")
console.log(":::::::::::::::88:.__..:88888:::::::::::'")
console.log("`'.:::::::::::88888888888.88:::::::::'")
console.log("`':::_:' -- '' -'-' `':_::::'`")
console.log("                               ")

        break
    case 3:
        console.clear()
console.log("        .:'")
console.log("        __ :'__")
console.log("     .'`  `-'  ``.")
console.log("    :          .-'")
console.log("    :         :")
console.log("     :         `-;")
console.log("      `.__.-.__.'")
console.log(" ")


        break
    default:
        console.log("Opção inválida")
        break
}