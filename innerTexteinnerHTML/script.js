let elementH2 = document.querySelector('h2');

console.log(elementH2);
console.log(elementH2.innerText);

let elementMain = document.querySelector('main');

console.log(elementMain);
console.log(elementMain.innerText);
console.log(elementMain.innerHTML);

elementH2.innerText = 'Novo título com innerText';

elementMain.innerHTML = `
  <h2> Novo subtítulo </h2>
  <ul> 
    <li> Elemento lista 1 </li>
    <li> Elemento lista 2 </li>
    <li> Elemento lista 3 </li>

  </ul>
`