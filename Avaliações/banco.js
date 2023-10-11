/**
 *  AVALIAÇÃO DO DIA 11/10/2023
 */

const read = require('readline-sync')
const color = require('colors')

class Conta {
    //Atributos
    constructor(numero, titular, saldo) {
        let _numero = numero
        this.getNumero = () => {
            return _numero
        }

        let _titular = titular
        this.getTitular = () => {
            return _titular
        }

        let _saldo = saldo
        this.getSaldo = () => {
            return _saldo
        }

    console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-".yellow)

    }
    //Metodos
    exibirSaldo() {
        console.log(`Saldo da conta corrente: ${this.getTitular()} é de: ${this.getSaldo().toFixed(2)}`)
    }
    depositar(valor) {
        this.getSaldo() + valor
    console.log(`Crédito de R$ ${valor.toFixed(2)}`)
}
sacar(valor) {
    if (valor <= this.getSaldo()){
        this.getSaldo() - valor
        console.log(`Débito de R$ ${valor.toFixed(2)}`)
    } else {
        console.log("Operação negada! Saldo insuficiente")
    }
}
}
class ContaPoupanca extends Conta {
    constructor(numero, titular, saldo, poupanca) {
        super(numero, titular, saldo)
        this.poupanca = poupanca
    }
    exibirSaldoPoupanca() {
        console.log(`O saldo da conta Poupanca do ${this.titular} é R$ ${this.saldo.toFixed(2)}.`)
    }
}

console.log(" BANK ".green)

let cc1 = new Conta (10000, "Leandro Ramos", 1000)
console.log(`Cliente: ${cc1.getTitular()} conta: ${cc1.getNumero()}`)
cc1.exibirSaldo()
cc1.depositar(500)
cc1.exibirSaldo()

let cc2 = new Conta (2000, "Sirlene Aparecida", 5000)
console.log (`Cliente: ${cc2.getTitular()} conta: ${cc2.getNumero()}`)
cc2.exibirSaldo()


let cc3 = new Conta (3000, "Robison Vaamonde", 3000)
console.log (`Cliente: ${cc3.getTitular()} conta: ${cc3.getNumero()}`)
cc3.exibirSaldo()
