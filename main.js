"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = require("./Personagem");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let input = (0, prompt_sync_1.default)();
let opcao = 0;
let person = new Personagem_1.Personagem("Sansa Stark", 100, 40, 20, 20);
while (opcao !== 9 && !person.isDead()) {
    console.log("=========== Personagem ============");
    console.log("1- Treinar ataque");
    console.log("2- Treinar defesa");
    console.log("3- Descansar");
    console.log("4- Entrar em Batalha");
    console.log("8- Imprimir atributos");
    console.log("9- Sair");
    console.log("===================================");
    opcao = +input("Escolha uma opção: ");
    switch (opcao) {
        case 1:
            person.treinarAtaque();
            console.log(person.status());
            break;
        case 2:
            person.treinarDefesa();
            console.log(person.status());
            break;
        case 3:
            console.log(person.status());
            let horas = +input("Digite o número de horas de descanso: ");
            person.descansar(horas);
            break;
        case 4:
            let rest = person.batalhar();
            console.log(`Essa batalha custou ${rest} de energia`);
            console.log(person.status());
            break;
        case 8:
            console.log(person.status());
            break;
        case 9:
            console.log("Até mais!");
            break;
        default:
            break;
    }
}
console.log("\nMorreu\n");
