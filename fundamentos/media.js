/**
 * App para calcular a média de duas notas 
 */
//importação do pacote readline-sync

const read = require('readline-sync') 
//variaveis 
let nome, disciplina 
let nota1, nota2, media // let criar variaveis 

// entragar o resultado 


// a parte que vai exibir o texto na tela
console.clear ( )
console.log("____            ___           __                       ")
console.log("/\\  _`\\         /\\_ \\         /\\ \\__  __                ")
console.log("\\ \\ \L\\ \\    ___\\//\\ \\      __\\ \\ ,_\\/\\_\\    ___ ___    ")
console.log(" \\ \\  _ <'  / __`\\\\ \\ \\   /'__`\\ \\ \\/\\/\\ \\ /' __` __`\\  ")
console.log("  \\ \\ \\L\\ \\/\\ \\L\\ \\\\_\\ \\_/\\  __/\\ \\ \\_\\ \\ \\/\\ \\/\\ \\/\\ \\ ")
console.log("   \\ \\____/\\ \\____//\\____\\ \\____\\\\ \\__\\\\ \\_\\ \\_\\ \\_\\ \\_\\ ")
console.log("    \\/___/  \\/___/ \\/____/\\/____/ \/\__/ \\/_/\\/_/\\/_/\\/\_/ ")

//entrada
nome = read.question('Digite um nome:')
disciplina = read.question('Digite uma disciplina:')
nota1 = Number(read.question('Digite a Nota1:'))  
nota2 = Number(read.question('Digite a Nota2:'))


// processamento 
media = (nota1 + nota2 ) / 2
//saida
console.clear()
console.log("_ _ _ _ _ _ _ _ _ _ _ _ _ _ ")
console.log(`Nome: ${nome}`) // console.log = atribuir o valor variavel
console.log(`Disciplina: ${disciplina}`)
console.log(`Nota1: ${nota1}`)
console.log(`Nota2: ${nota2}`)
console.log(`Média final: ${media}`)
console.log("_ _ _ _ _ _ _ _ _ _ _ _ _ _ ")
