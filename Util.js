"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
class Util {
    //um método estático é um método que não precisa da instancia da classe para ser invocado.
    static randomizar(inicio, fim) {
        return inicio + Math.random() * (fim - inicio);
    }
}
exports.Util = Util;
