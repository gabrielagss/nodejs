/**
 * EXERCICIO DE FIXAÇÃO POO
 */

class Conta {
    //Atributos 
    constructor(numero, titular, saldo) {
        this.numero = numero
        this.titular = titular
        this.saldo = saldo 
    }
    //metodos
    exibirSaldo() {
        console.log(`Saldo da conta corrente: ${this.saldo.toFixed(2)}`)
    }
    depositar(valor) {
        this.saldo += valor
        console.log(`Credito de ${valor.toFixed(2)}`)
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor
            console.log(`Debito de ${valor.toFixed(2)}`)
        } else {
            console.log("Saque não permitido")
        }
    }
} 

class Poupanca extends Conta {
    constructor(numero, titular,saldo, poupanca) {
        super(numero, titular,saldo)
        this.poupanca = poupanca
    }
    criarSaldoPoupanca() {
        console.log(`Saldo da conta poupança: ${this.saldo.toFixed(2)}`)
    }
    
}

console.log(" ____               _   _   _  __")
console.log("|  _ \\      /\\     | \\ | | | |/ /")
console.log("| |_) |    /  \\    |  \\| | | ' / ")
console.log("|  _ <    / /\\ \\   | . ` | | |<  ")
console.log("| |_) |  / /__\\ \\  | | | | | | \\ ")
console.log("|____/  /_/    \\_\\ |_| \\_| |_|\\_\\ ")

let cc1 = new Conta (100000, "felipe Grellmann", 1000)
console.log(`Cliente: ${cc1.titular} conta: ${cc1.numero}`)
cc1.exibirSaldo()
cc1.depositar(500)
cc1.exibirSaldo()
cc1.sacar(2000)
cc1.exibirSaldo()

let ccp1 = new Poupanca(10, "Felipe Grellman", 100)
console.log(`Cliente: ${ccp1.titular} conta: ${ccp1.numero}`)
ccp1.criarSaldoPoupanca()

