/**
 * Cálculo do valor da hora Tecnica
 */

const read = require ('readline-sync')
let remuneracao, custo, horasMes, horasTecnicas

let estimativas, total

console.clear ( )
console.log(" ")
console.log(" > > > > > > > > > > > > > > > > > > > > ")
console.log(" > > Calculadora_de_horas_de_servioo > > ")
console.log(" > > > > > > > > > > > > > > > > > > > > ")
console.log(" ")

//entrada_1
remuneracao = Number (read.question("Digite qual sua remuneracao mensal pretendida: ").replace("," , "."))
horasMes = Number (read.question("Qual sua carga horaria do mes: ").replace("," , "."))
custo = Number (read.question("Qual e o seu custo operacional : ").replace("," , "."))
horasTecnicas = (remuneracao + (remuneracao * 0.3) + custo + (remuneracao * 0.2)) / horasMes

console.log(`Hora Tecnica de: ${horasTecnicas.toFixed(2)}`)

console.clear( )
estimativas = Number(read.question("Estimativa de horas prestada de servico: ").replace("," , "."))
total = horasTecnicas * estimativas

console.log(`Total a ser cobrado do cliente: R$ ${total.toFixed(2)}`)