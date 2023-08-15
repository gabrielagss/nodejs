//variaveis 
let X,Y, valor
const read = require ('readline-sync')

console.clear ( )
console.log(" - - - - - - - - ")
console.log(" > > > > > > > > > > >  ")
console.log(" > > REGRA DE TRÊS > > ")
console.log(" > > > > > > > > > > >  ")
console.log( )

X = Number(read.question("Digite o valor de X:"))
Y = Number (read.question("Digite o valor de Y:"))
valor = (X * Y) / 100
console.log (`${X}% de ${Y} = ${valor}`)