import { Util } from "./Util";

//métodos abstratos só podem aparecer em classes abstratas
//uma classe abstrata não pode ser instanciada
export abstract class Personagem {
  protected _nome: string;
  protected _armadura: number;
  protected _vidaAtual: number;
  protected _vidaMaxima: number;

  constructor(nome: string) {
    this._nome = nome;
    this._armadura = Util.randomizar(100, 1_000);
    this._vidaMaxima = Util.randomizar(100, 1_000);
    this._vidaAtual = Util.randomizar(40, this._vidaMaxima);
  }

  //métodos abstratos possuem uma assinatura sem ter uma implementação
  public abstract atacar(): string;

  public abstract defender(atacante: Personagem): number;
}
