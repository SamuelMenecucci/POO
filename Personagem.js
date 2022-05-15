"use strict";
exports.__esModule = true;
exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    //se eu passar os atributos pelo constructor, não preciso passar aqui, pois entende que são atributos da classe já. dessa forma, os valores se tornam obrigatórios
    //   nome: string = "";
    //   energia: number = 0;
    //   vida: number = 0;
    //   ataque: number = 0;
    //   defesa: number = 0;
    //se for passado um atributo para o constructor, esse atributo é obrigatório no momento da instancia do objeto com essa classe. então, se eu passo nome aqui, quando eu for dar um new Personagem() eu sou obrigado a passar o nome nele new Personagem(nome). se eu passar o nome mas não atribui-lo a nenhum atributo da classe, ele será obrigatório mas não será atribuida a nada, sendo assim, o nome ficaria vazio, por isso eu coloco this.nome = nome . o this.nome se refere ao escopo da classe, enquanto o nome sozinho se refere ao parametro sendo recebido.
    //se eu não tiver os atributos no escopo da classe e passar direto no constructor, não preciso utilizar o this. isso é algo do typescript apenas, em java é necessário fazer as declarações e atribuições com o this
    function Personagem(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    //TODA VEZ QUE PENSAR EM LER DADOS NA CLASSE, USE PARAMÊTROS
    //TODA VEZ QUE PENSAR EM IMPRIMIR NA CLASSE, USE RETORNO
    //métodos são ações que o nosso objeto pode executar
    //para declarar um método basta colocar o nome dele, () e depois o tipo de retorno, no caso void por não ter retorno algum, depois {}
    //nomeMétodo(): tipoRetorno {
    // }
    Personagem.prototype.status = function () {
        return ("Guerreiro:\n " +
            "\nNome: " +
            this.nome + // o this faz referencia ao atributo da classe, do atributo do escopo da classe
            "\nEnergia: " +
            this.energia.toFixed(1) +
            "\nAtaque: " +
            this.ataque.toFixed(1) +
            "\nDefesa: " +
            this.defesa.toFixed(1));
    };
    Personagem.prototype.treinarAtaque = function () {
        this.ataque += Math.random() * 7; //valores vão de 0 a 7
        this.energia -= Math.random() * 10; //valores vão de 0 a 10
        if (this.ataque > 100) {
            this.defesa = 0;
        }
    };
    Personagem.prototype.treinarDefesa = function () {
        this.defesa += Math.random() * 5; //valores vão de 0 a 5
        this.energia -= Math.random() * 10; //valores vão de 0 a 10
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    };
    Personagem.prototype.descansar = function (tempo) {
        this.energia += tempo * (Math.random() * 10);
        if (this.energia > 0) {
            this.energia = 100;
        }
    };
    Personagem.prototype.batalhar = function () {
        var desgaste = Math.random() * 10;
        this.energia -= desgaste;
        return desgaste;
    };
    Personagem.prototype.isDead = function () {
        if (this.energia <= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return Personagem;
}());
exports.Personagem = Personagem;
