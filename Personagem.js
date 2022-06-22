"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    constructor(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    status() {
        return ("Guerreiro:\n " +
            "\nNome: " +
            this.nome +
            "\nEnergia: " +
            this.energia.toFixed(1) +
            "\nAtaque: " +
            this.ataque.toFixed(1) +
            "\nDefesa: " +
            this.defesa.toFixed(1));
    }
    treinarAtaque() {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;
        if (this.ataque > 100) {
            this.defesa = 0;
        }
    }
    treinarDefesa() {
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }
    descansar(tempo) {
        this.energia += tempo * (Math.random() * 10);
        if (this.energia > 0) {
            this.energia = 100;
        }
    }
    batalhar() {
        let desgaste = Math.random() * 10;
        this.energia -= desgaste;
        return desgaste;
    }
    isDead() {
        if (this.energia <= 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Personagem = Personagem;
