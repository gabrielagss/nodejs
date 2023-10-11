/**
 * POO - Fundamentos da programação Orientada a objetos 
 * Exemplo: Jogo de MINECRAFT
 */

//new = criar um objeto / classe modelo é onde definimos as coisas e o que elas vão fazer . . (ela não executa)

// Classe modelo (Abstração)

// a palavra class serve para criar uma clase modelo
class Bloco { //todo nome e classe começa com letra maiucula 
    //Atributos
    constructor(resistencia, textura) {
        this.resistencia = resistencia
        this.textura = textura
        /** this = se refere ao objeto que está sendo referenciado em um determinado contexto ou escopo.
         *  Ele pode ser usado dentro de uma função para se referir ao objeto que a chamou, ou pode ser usado fora de uma função para se referir ao objeto global
         */
    }
    //Ações (métodos) é o que fica dentro do atributo
    criarBlocos() {
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_")
        console.log("┍──┑")
        console.log("┖──┚")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }

    construir() {
        console.log(`Bloca de ${this.textura} colocado.`)
    }
    minerar() {
        console.log("☐  ☐  ☐  Recursos obtidos !")
    }
    cafe() {
        console.log("⛾  ♡ ⛾  ♡ ⛾  ♡ Recurso obtido ")
    }
}
//HERANÇA   
// Classe modelo com herança(extende) ele entende que tem que estabelecer um vinculo com enxada a classe Bloco
class Enxada extends Bloco {
    //atributos
    constructor(resistencia, textura, conquista) {
        //suber = puxar a classe PAI (vai erdar o de cima)
        super(resistencia, textura)
        //this = criando um novo variavel
        this.conquista = conquista
    }
    //método criar enxada
    criarExada() {
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_")
        console.log("⛏  ⛏  ⛏")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistencia: ${this.resistencia}`)
    }
    arar () {
        console.log("._._. Terra arada !")
        if (this.conquista === true) {
            console.log("☀ conquista  obtida ! ☺ ")
        }
    }
    //polimorfismo
    minerar() {
        console.log(" ☠  Dano atribuído")
    } 

}
//Criação de objetos (Mundo minecraft)
console.clear
console.log(" __   __  ___   __    _  _______  _______  ______    _______  _______  _______ ")
console.log("|  |_|  ||   | |  |  | ||       ||       ||    _ |  |   _   ||       ||       |")
console.log("|       ||   | |   |_| ||    ___||       ||   | ||  |  |_|  ||    ___||_     _|")
console.log("|       ||   | |       ||   |___ |       ||   |_||_ |       ||   |___   |   |  ")
console.log("|       ||   | |  _    ||    ___||      _||    __  ||       ||    ___|  |   |  ")
console.log("| ||_|| ||   | | | |   ||   |___ |     |_ |   |  | ||   _   ||   |      |   |  ")
console.log("|_|   |_||___| |_|  |__||_______||_______||___|  |_||__| |__||___|      |___|  ")
console.log("")
//criando um bloco de terra
//new =  novo objeto sempre 
//Bloco (classe modelo (resistencia, textura))
const bloco1 = new Bloco(1, "terra")
bloco1.criarBlocos()

//criando bloco de madeira
const bloco2 = new Bloco(2, "madeira")
bloco2.criarBlocos()
bloco2.construir()

//criando bloco de pedra
const bloco3 = new Bloco(3, "pedra")
bloco3.criarBlocos()
bloco3.minerar()

//criando bloco cafe
const bloco4 = new Bloco(4, "cafe")
bloco4.criarBlocos()
bloco4.cafe()

//criando enxada de madeira 
const enxada1 = new Enxada(2, "madeira", false)
enxada1.criarExada()
enxada1.arar()

const enxada2 = new Enxada(5, "ferro", true)
enxada2.criarExada()
enxada2.arar()

const enxada3 = new Enxada(10, "diamante", false)
enxada3.criarExada()
enxada3.minerar()
