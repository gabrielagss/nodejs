/**
 *  AVALIAÇÃO DO DIA 11/10/2023 / correção
 */

const colors = require ('colors')
class Conta {
    //atributos
    constructor(numero, titular, saldo) {
        this.numero = numero
        this.titular = titular
        this.saldo = saldo
    }
    //métodos
    exibirConta() {
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_".yellow)
        console.log(`Titular: ${this.titular} Cc: ${this.numero}`)
    }
    exibirSaldo() {
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`)
    }
    depositar(valor) {
        this.saldo += valor
        console.log(`Crédito: R$ ${valor.toFixed(2)}`)
    }
    sacar(valor) {
        //validação
        if (valor <= this.saldo) {
            this.saldo -= valor
            console.log(`Débito: R$ ${valor.toFixed(2)}`)
        } else {
            console.log("Saque não permitido")
        }
    }
    pix(destinatario, valor) {
        //validação
        if (valor <= this.saldo) {
            this.saldo -= valor //débito de um valor da conta
            destinatario.saldo += valor //crédito do valor na conta destino
            console.log(`PIX de R$ ${valor.toFixed(2)} para ${destinatario.titular}`)
        } else {
            console.log("Saldo insuficiente para transferência")
        }
    }
}

//herança
class contaPoupanca extends Conta {
    //atributos
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo)
    }
    //métodos
    exibirContaPoupanca() {
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_".green)
        console.log(`Titular: ${this.titular} Cp: 500${this.numero}`)
    }

    exibirSaldoPoupanca() {
        console.log(`Saldo de poupança: R$ ${this.saldo.toFixed(2)}`)
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_".green)
    }
}


console.log(".______       ___      .__   __.  __  ___ ".green)
console.log("|   _  \\     /   \\     |  \\ |  | |  |/  / ".green)
console.log("|  |_)  |   /  ^  \\    |   \\|  | |  '  /  ".green)
console.log("|   _  <   /  /_\\  \\   |  . `  | |    <   ".green)
console.log("|  |_)  | /  _____  \\  |  |\\   | |  .  \\  ".green)
console.log("|______/ /__/     \\__\\ |__| \\__| |__|\\__\\".green)

let cc1 = new Conta(1000, "Leandro Ramos", 10000)
let cc1p = new contaPoupanca(1000, "Leandro Ramos", 2000)
let cc2p = new contaPoupanca(5000, "Sirlene Aparecida", 3500)
let cc2 = new Conta(1001, "Sirlene Aparecida", 5000)

//movimentação de conta corrente
cc1.exibirConta()
cc1.exibirSaldo()
cc1.sacar(2000)
cc1.exibirSaldo()
cc1.depositar(15000)
cc1.exibirSaldo()

//conta poupança
cc1p.exibirContaPoupanca()
cc1p.exibirSaldoPoupanca()

cc2p.exibirContaPoupanca()
cc2p.exibirSaldoPoupanca()

//conta corrente
cc2.exibirConta()
cc2.exibirSaldo()

//pix (cc1 para cc2)
cc1.exibirConta()
cc1.exibirSaldo()
cc1.pix(cc2, 1000)
cc1.exibirSaldo()

//conta corrente
cc2.exibirConta()
cc2.exibirSaldo()
