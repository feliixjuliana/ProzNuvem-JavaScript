const readlineSync = require('readline-sync');

let nome = readlineSync.question("Me informe seu nome:");
let idade = Number(readlineSync.question("Informe sua idade: "));
let cidade = readlineSync.question("Informe a cidade onde mora:")

let aluna = {
    nome: nome,
    idade: idade,
    cidade: cidade
}

console.log(`
    Olá, meu nome é ${aluna.nome},
    tenho ${aluna.idade} anos e moro em ${cidade}.
    `)