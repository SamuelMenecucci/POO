export class Util {
  //um método estático é um método que não precisa da instancia da classe para ser invocado.
  public static randomizar(inicio: number, fim: number): number {
    return inicio + Math.random() * (fim - inicio);
  }
}
