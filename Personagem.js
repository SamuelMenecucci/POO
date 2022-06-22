"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
const Util_1 = require("./Util");
class Personagem {
    constructor(nome) {
        this._nome = nome;
        this._armadura = Util_1.Util.randomizar(1000, 10000);
        this._vidaMaxima = Util_1.Util.randomizar(200, 10000);
        this._vidaAtual = Util_1.Util.randomizar(40, this._vidaMaxima);
    }
}
exports.Personagem = Personagem;
