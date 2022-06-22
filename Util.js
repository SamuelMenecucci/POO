"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
class Util {
    static randomizar(inicio, fim) {
        return inicio + Math.random() * (fim - inicio);
    }
}
exports.Util = Util;
