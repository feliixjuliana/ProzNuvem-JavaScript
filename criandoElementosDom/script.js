let elementoJavaScript = document.createElement("li");
elementoJavaScript.innerText = "JavaScript";
elementoJavaScript.id = "ling-js";

let listaLinguagens = document.querySelector(".lista-linguagens");
listaLinguagens.appendChild(elementoJavaScript);

console.log(elementoJavaScript);

//Mesmo não prático, vamos aprender como fazer com elementos maiores

const postagemJavaScript = document.createElement("div");

postagemJavaScript.innerHTML = `<h2 class="post-titulo"> javaScript </h2>
<p class="post-texto"> JavaScript é uma linguagem de programação </p>`

console.log(postagemJavaScript)
const postagens = document.querySelector(".postagens");
postagens.appendChild(postagemJavaScript);