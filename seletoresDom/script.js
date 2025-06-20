console.log("Olá, mundo!");

const titulo = document.getElementById('titulo');
const textos = document.getElementsByClassName('texto-simples');
console.log(titulo)
console.log(textos[1])

const segundoTitulo = document.querySelector('div h2');
console.log(segundoTitulo);

const textosPorClasse = document.querySelectorAll(".texto-simples");
console.log(textosPorClasse);