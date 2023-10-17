/**
 *  AVALIAÇÃO DO DIA 11/10/2023 / correção
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
    exibirConta() {
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-".yellow)
        console.log(`Titular: ${this.getTitular()} Cc:${this.getNumero()}`)
    }
    exibirSaldo() {
        console.log(`Seu saldo da conta corrente é: ${this.getSaldo().toFixed(2)}`)
    }
    depositar(valor) {
        this.getSaldo() + valor
        console.log(`Crédito R$ ${valor.toFixed(2)}`)
    }
    sacar(valor) {
        if (valor <= this.getSaldo()) {
            this.getSaldo (this.getSaldo() - valor) 
            console.log(`Débito de R$ ${valor.toFixed(2)}`)
        } else {
            console.log("Operação negada! Saldo insuficiente")
        }
    }
    pix(destinatario, valor) {
        if (valor <= this.getSaldo()) {
            this.setSaldo (this.getSaldo() - valor)  //debito de um valor da conta 
            destinatario.getSaldo() += valor //crédito do valor na conta destino
            console.log(`PIX de R$ ${destinatario.getTitular()} para ${valor.toFixed(2)}`)
        } else {
            console.log("Operação negada! Saldo insuficiente")
        }
    }
    tranferencia(valor) {
        this.exibirSaldoPoupanca + valor
        console.log("")
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-".green)
        console.log(`Tranferencia da conta corrente feita para conta Poupança de R$: ${valor} `)

        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-".yellow)
    }
}

class ContaPoupanca extends Conta {
    constructor(numero, titular, saldo, poupanca) {
        super(numero, titular, saldo)
        this.poupanca = poupanca
    }

    exibirPoupanca() {
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-".green)
        console.log(`Titular: ${this.getTitular()} Cc: 500 ${this.getNumero()}`)
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-".green)
    }
    
    mostrar(valor) {
        console.log(`Tranferência feita da conta corrente para conta poupança no valor de R$ ${valor} com sucesso`)
        }
}


console.log(".______       ___      .__   __.  __  ___ ".green)
console.log("|   _  \\     /   \\     |  \\ |  | |  |/  / ".green)
console.log("|  |_)  |   /  ^  \\    |   \\|  | |  '  /  ".green)
console.log("|   _  <   /  /_\\  \\   |  . `  | |    <   ".green)
console.log("|  |_)  | /  _____  \\  |  |\\   | |  .  \\  ".green)
console.log("|______/ /__/     \\__\\ |__| \\__| |__|\\__\\".green)

//instacia objetos
let cc1 = new Conta(1000, "Leandro Ramos", 10000)
cc1.exibirConta()
cc1.sacar(200)
cc1.exibirSaldo()
cc1.exibirSaldo()

let cc1p = new ContaPoupanca(1000, "Leandro Ramos", 2000)
cc1p.exibirPoupanca()

let cc2 = new Conta(1001, "Sirlene Aparecida", 5000)
cc2.exibirConta()
cc2.exibirSaldo()

let cc2p = new ContaPoupanca(1000, "Sirlene Aparecida", 2000)
cc2p.exibirPoupanca()

let cc3 = new Conta(1001, "Robison Vaamonde", 5000)
cc3.exibirConta()

let cc3p = new ContaPoupanca(1000, "Robison Vaamonde", 2000)
cc3p.exibirPoupanca()