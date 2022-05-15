instalação typescript
yarn add typescript

depois que está instalado, basta iniciar o typescript no projeto com

tsc --init

para eu compilar um código ts em js, basta roda no terminal

tsc

para que eu não precise ficar rodando tsc toda hora para fazer a conversão, basta eu colocar um -w após que ele irá ficar observando o arquivo e compilando automaticamente

tsx -w

Constructor é um método que é utilizado para ditar como um objeto é inicializado.

no constructor eu especifico como os meus atributos serão inicializados.

adicionado o ts node

yarn add ts-node

dessa forma, o typescript não irá ficar gerando o arquivo .js. assim podemos excluir o .js
agora ao invés de rodarmos node nomeDoArquivo.js rodamos yarn ts-node nomeArquivo.ts
