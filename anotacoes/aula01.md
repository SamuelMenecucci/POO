Os 4 pilares da programação orientada a objetos

Abstração
Conforme o paradgma sugere, é transformar um objeto da vida real o mais proximo possível pra análise e desenvolvimento na programação. é uma representação dos objetos da vida real dentro do meu sistema
Ele terá atributos, que representa características do objeto
Ele terá métodos também por exemplo um produto poderia ter o método de dar baixa no produt

Encapsulamento

vantagens
prática de programação
segurança
reutilização de código
fácil manutenção

Classe
Abstração do que há em comum (em termos de características e comportamentos) a um conjunto de objetos
Possui atributos e métodos

objeto
Objeto é uma instância de uma classe
Combina a estrutura de dados (atributos) e o comportamento dos dados (operações/métodos) em uma única entidade
Um objeto pode ser definido como um conceito, uma abstração, algo com limites nítidos e significado em relação ao mundo
Objeto servem como uma base real para a elaboração de um sistema consistente com a realidade modelada
Ex: UM livro, UM telefone, UMA Faculdade, UM produto, UM aluni, UM professor

Classe e Objeto
Classe é o que projetamos
Objeto é o que criamos a partir da classe
As classes estão para os objetos assim como as plantas arquitetônicas estão para as casas

Exemplo
Classe Carro

Carro

Marca
Modelo
Ano
Potencia

Acelerar()
trocarMarcha

Objeto

Fiat |Ford
Bravo| Maverick
2014 |1975
110cv| 199cv

Encapsulamento
Atualmente na nossa classe nós temos a nossa classe dessa forma, com os atributos assim e tudo com public, que é um modificador de acesso.

```javascript
export class Personagem {
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {}
  }
```

deixando dessa forma, deixamos os membros da nossa classe expostos.
