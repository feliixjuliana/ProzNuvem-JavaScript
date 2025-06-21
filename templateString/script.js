let nome = "Rafael";
let sobrenome = "Pereira";

let nomeCompleto = "Meu nome é" + nome + " " + sobrenome;
console.log(nomeCompleto);

// Com template String

let templateString = `Meu nome é ${nome} ${sobrenome}`;
console.log(templateString);

//Permite quebra de linha

let templateStringLinha = `Meu nome é ${nome} e
meu sobrenome é ${sobrenome}`;
console.log(templateStringLinha);