/**
 * App para calcular a média de duas notas 
 */

let nome, disciplina // cria uma variavel
let nota1, nota2, nota3, media // criar variaveis 

console.clear// entragar o resultado / a parte que vai exibir o texto na tela 
console.clear 

console.log("____            ___           __                       ")
console.log("/\\  _`\\         /\\_ \\         /\\ \\__  __                ")
console.log("\\ \\ \L\\ \\    ___\\//\\ \\      __\\ \\ ,_\\/\\_\\    ___ ___    ")
console.log(" \\ \\  _ <'  / __`\\\\ \\ \\   /'__`\\ \\ \\/\\/\\ \\ /' __` __`\\  ")
console.log("  \\ \\ \\L\\ \\/\\ \\L\\ \\\\_\\ \\_/\\  __/\\ \\ \\_\\ \\ \\/\\ \\/\\ \\/\\ \\ ")
console.log("   \\ \\____/\\ \\____//\\____\\ \\____\\\\ \\__\\\\ \\_\\ \\_\\ \\_\\ \\_\\ ")
console.log("    \\/___/  \\/___/ \\/____/\\/____/ \/\__/ \\/_/\\/_/\\/_/\\/\_/ ")

nome = "Gabriela Gomes da Silva"
disciplina = "Matemática"
nota1 = 5 // dar o valor da variavel 
nota2 = 7.5
nota3 = 3.7

// saida
media = (nota1 + nota2 + nota3) / 2

console.log(`Nome: ${nome}`)
console.log(`Disciplina: ${disciplina}`)
console.log(`Nota1: ${nota1}`)
console.log(`Nota2: ${nota2}`)
console.log(`Média final: ${media}`)
