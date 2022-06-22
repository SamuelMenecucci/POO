"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
const Util_1 = require("./Util");
class Personagem {
    constructor(nome) {
        this._nome = nome;
        this._armadura = Util_1.Util.randomizar(100, 1000);
        this._vidaMaxima = Util_1.Util.randomizar(100, 1000);
        this._vidaAtual = Util_1.Util.randomizar(40, this._vidaMaxima);
    }
}
exports.Personagem = Personagem;
