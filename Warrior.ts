import { Personagem } from "./Personagem";
import { Util } from "./Util";

//Uma classe pode extender apenas uma classe
export class Warrior extends Personagem {
  private _forca: number;
  private _agilidade: number;

  constructor(nome: string) {
    super(nome);
    this._armadura = Util.randomizar(1_000, 10_000);
    this._vidaMaxima = Util.randomizar(200, 10_000);
    this._vidaAtual = Util.randomizar(20, this._vidaMaxima);
    this._forca = Util.randomizar(100, 1_000);
    this._agilidade = Util.randomizar(100, 1_00);
  }

  public atacar(): string {
    return "Ataque do Guerreiro";
  }

  public defender(atacante: Personagem): number {
    throw new Error("Method not implemented.");
  }
}
