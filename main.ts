import { Personagem } from "./Personagem";
import prompt from "prompt-sync";
import { Mage } from "./Mage";
import { Warrior } from "./Warrior";
import { Priest } from "./Priest";

let mage: Personagem = new Mage("Mago");
let warrior: Personagem = new Warrior("Warrior");
let priest: Personagem = new Priest("Priest");

console.log(mage);
console.log(warrior);
console.log(priest);

// let input = prompt();

// let opcao: number = 0;

// while (opcao !== 9 && !person.isDead()) {
//   console.log("=========== Personagem ============");
//   console.log("1- Treinar ataque");
//   console.log("2- Treinar defesa");
//   console.log("3- Descansar");
//   console.log("4- Entrar em Batalha");
//   console.log("8- Imprimir atributos");
//   console.log("9- Sair");
//   console.log("===================================");

//   opcao = +input("Escolha uma opção: ");

//   switch (opcao) {
//     case 1:
//       person.treinarAtaque();
//       console.log(person.status());

//       break;

//     case 2:
//       person.treinarDefesa();

//       console.log(person.status());

//       break;

//     case 3:
//       console.log(person.status());
//       let horas: number = +input("Digite o número de horas de descanso: ");
//       person.descansar(horas);

//       break;

//     case 4:
//       let rest: number = person.batalhar();
//       console.log(`Essa batalha custou ${rest} de energia`);

//       console.log(person.status());

//       break;

//     case 8:
//       console.log(person.status());

//       break;

//     case 9:
//       console.log("Até mais!");
//       break;

//     default:
//       break;
//   }
// }

// console.log("\nMorreu\n");
