/**
 * POO - ESTUDO DO ENCAPSOLAMENTO 
 */

//class modele 
class Pessoa {
    //atributos
    constructor(nome, idade) {
        this.nome = nome //variável publica
        // - - - - - - - - - - - ENCAPSULAMENTO - - - - - - - - - - - - - - - 
        let _idade = idade //let_idade (encapsular a variável) fica meio que escondida
        //métodos GET e SET = para acessar avariável idade 
        this.getIdade = function  () {
            return _idade
        }
        this.setIdade = (novaIdade) => {
            _idade = novaIdade
        }
        //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    }
    //métodos (ações)
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.getIdade()} anos.`)
    }
}
/* instancia (criar) objeto */
const pessoa1 = new Pessoa ("Gabriela", 19)
pessoa1.apresentar()
pessoa1.setIdade(20)
pessoa1.apresentar()
