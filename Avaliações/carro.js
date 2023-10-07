/**
 * POO - DESAFIO DO DIA 06/10/2023
 * CARRO & AVIÃO
 */
const colors = require('colors')
class Carros {
    constructor(modelo, ano, cor) {
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
     


    }
criarCarro() {
    console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-")
    console.log(" 🚗 🚗 ")
    console.log(`modelo ${this.modelo}`)
    console.log(`cor ${this.cor}`)
    console.log(`ano ${this.ano}`)
    
}
ligar() {
    console.log("ligar carro: ✅ ✅ ")
}
desligar() {
    console.log("desligar carro: ❌ ❌ ❌ ❌")
}
acelerar() {
    console.log("acelerar carro: Vroomm ⚡")
    
}
}   

class Aviao extends Carros {
    constructor(ano, cor, envergadura) {
        super(ano, cor)
        this.envergadura = envergadura
    }
criarAviao() {
    console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- ")
    console.log(`Envergadura ${this.envergadura}`)
    console.log(`ano ${this.ano}`)
    console.log(`Cor ${this.cor}`)
}
iniciarvoo() {
    console.log(" ⚐ 🛫 🛫 ⚐ ")
    if (this.acelerar === true) {
        console.log("avião voando: 🛫 🛫")
    }
}
decolando() {
    console.log("Voando: 🛫 🛫 ")
}
aterrizar() {
    console.log("avião aterrizando: ⚑ 🛬 🛬 ⚑ ")
}
}
console.log("                       - - CARROS - - ")

const carro1 = new Carros( "PALIO","2005", "VERMELHA".red)
carro1.criarCarro()
carro1.ligar()
carro1.acelerar()

const carro2 = new Carros("MUSTANG", "1970", "PRETA".black)
carro2.criarCarro()
carro2.ligar()
carro2.desligar()

const carro3 = new Carros("CORSA", "2017",  "AZUL".blue )
carro3.criarCarro()
carro3.ligar()
carro3.acelerar()
carro3.desligar()
console.clear

console.log("          _ _ AVIÃO _ _")
const avia1 = new Aviao("azul", "2005","12" )
avia1.criarAviao()
avia1.aterrizar()

const avia2 = new Aviao("verde","2001", "5") 
avia2.criarAviao()
avia2.iniciarvoo()
avia2.decolando()
avia2.aterrizar()

