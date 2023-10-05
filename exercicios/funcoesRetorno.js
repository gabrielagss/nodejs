/**
 * ESTUDO DAS FUNÇÕES COM PARÂMETROS E RETORNOS 
 */
// Sintaxe comum 
function somar(num1, num2){
    return(console.log(num1 + num2)) //retorno da somar 
}
// Para executar a função devemos passar dois valores / temos que chamar o nome da função 
somar(2, 5)
//função atribuida
let somaAtribuida = function (num1, num2) {
    return(console.log(num1 + num2))
}
somaAtribuida(5, 5)

//Arrow function
let somarAF = (num1, num2) => {
    return(console.log(num1 + num2))
} 
somarAF(2, 2)