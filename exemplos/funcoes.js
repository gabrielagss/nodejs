/**
 * ESTUDO DAS FUNÇÕES 
 */


// função simples
function hello () {
    console.log("Hello function")
}

// para excutar uma função basta escrever o nome de uma função junto com parênteses
hello()

// Funções a tribuidas
    const hello2 = function() {
        console.log("Hello function atribuida")
    }
hello2()

// Função atribuida simplificado (arrow function) => igual a palavra FUNCTION
const hello3 = () => {
    console.log("Hello arrow function")
}
hello3()

typeof(hello3)
console.log(typeof(hello3))