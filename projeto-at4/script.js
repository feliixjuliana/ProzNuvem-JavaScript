let titulo = document.createElement("h1");
titulo.innerText = "Produto em promoção";
titulo.id = "promocao";

let tituloDiv = document.querySelector(".tituloDiv");
tituloDiv.appendChild(titulo);

console.log(titulo);

const produto = document.createElement("div");
produto.innerHTML = `
    <h2> Lava-Louças </h2>
    <p>Por metade do preço temos a melhor lava-louça do mercado brasileiro, com frete gratuito. Vem no tom branco amarelado junto com um toque amarelado com um toque sofisticado e moderno.</p>
    <h3>Preço: 2.000,00 </h3>`


let produtoDiv = document.querySelector(".produtoDiv");
produtoDiv.appendChild(produto);
