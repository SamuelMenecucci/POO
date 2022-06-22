"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const Personagem_1 = require("./Personagem");
const Util_1 = require("./Util");
class Mage extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome);
        this._armadura = Util_1.Util.randomizar(100, 1000);
        this._vidaMaxima = Util_1.Util.randomizar(200, 1000);
        this._vidaAtual = Util_1.Util.randomizar(40, this._vidaMaxima);
        this._intelecto = Util_1.Util.randomizar(100, 1000);
        this._velocidade = Util_1.Util.randomizar(10, 2000);
    }
    atacar() {
        return "Ataque do Mago";
    }
    defender(atacante) {
        throw new Error("Method not implemented.");
    }
}
exports.Mage = Mage;
