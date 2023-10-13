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
    }
    //Metodos 
    exibirSaldo() {
        console.log(`Seu saldo da conta corrente é de: ${this.getSaldo().toFixed(2)}`)
    }
    depositar(valor) {
        this.getSaldo() + valor
        console.log(`Crédito de R$ ${valor.toFixed(2)}`)
    }
    sacar(valor) {
        if (valor <= this.getSaldo()) {
            this.getSaldo() - valor
            console.log(`Débito de R$ ${valor.toFixed(2)}`)
        } else {
            console.log("Operação negada! Saldo insuficiente")
        }
    }
    pix(valor) {
        console.log("") 
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-".blue)
        this.getSaldo() + valor
        console.log(`Seu pix foi aprovado para: Robison Vaamonde no valor de R$: ${valor}`)
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-".blue)
        console.log("")
    }
    recebido(valor) {
        console.log("")
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-".blue)
        console.log(`Você recebeu um pix no valor de R$: ${valor} de Sirlene Aparecida`)
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-".blue)
    }
    tranferencia(valor) {
        this.exibirSaldoPoupanca + valor
        console.log("")
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-".green)
        console.log(`Tranferencia da conta corrente feita para conta Poupança de R$: ${valor} `)
    }
    mostrar(valor) {
    console.log(`Tranferência feita da conta corrente para conta poupança no valor de R$ ${valor} com sucesso`)
    }
}


class ContaPoupanca extends Conta {
    constructor(numero, titular, saldo, poupanca) {
        super(numero, titular, saldo)
        this.poupanca = poupanca
    }
    exibirSaldoPoupanca() {
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-".green)
        console.log(`O saldo da conta Poupanca do cliente: ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}`)
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-".green)
        console.log("")
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-".yellow)
    }
}


console.log(".______       ___      .__   __.  __  ___ ".green)
console.log("|   _  \\     /   \\     |  \\ |  | |  |/  / ".green)
console.log("|  |_)  |   /  ^  \\    |   \\|  | |  '  /  ".green)
console.log("|   _  <   /  /_\\  \\   |  . `  | |    <   ".green)
console.log("|  |_)  | /  _____  \\  |  |\\   | |  .  \\  ".green)
console.log("|______/ /__/     \\__\\ |__| \\__| |__|\\__\\".green)
console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-".yellow)

let cc1 = new Conta(10000, "Leandro Ramos", 2000)
console.log(`Cliente: ${cc1.getTitular()} numero da conta: ${cc1.getNumero()}`)
cc1.exibirSaldo()
cc1.depositar(300)

let cpc1 = new ContaPoupanca(400, "Leandro Ramos", 7000)
cpc1.exibirSaldoPoupanca()


let cc2 = new Conta(2000, "Sirlene Aparecida", 5000)
console.log(`Cliente: ${cc2.getTitular()} numero da conta: ${cc2.getNumero()}`)
cc2.exibirSaldo()
cc2.pix(30)

let cpc2 = new ContaPoupanca(400, "Sirlene Aparecida", 7000)
cpc2.exibirSaldoPoupanca()

let cc3 = new Conta(3000, "Robison Vaamonde", 8000)
console.log(`Cliente: ${cc3.getTitular()} numero da conta: ${cc3.getNumero()}`)
cc3.exibirSaldo()
cc3.depositar(350)
cc3.recebido(30)
cc1.tranferencia(150)

let cpc3 = new ContaPoupanca(400, "Robison Vaamonde", 7000)
cpc3.mostrar(150)
cpc3.exibirSaldoPoupanca()