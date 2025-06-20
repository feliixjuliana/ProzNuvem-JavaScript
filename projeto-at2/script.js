const elementH1 = document.querySelector('h1');
const elementUl = document.querySelector('ul');
const elementA = document.querySelector('a');
const elementOl = document.querySelector('ol');

elementH1.innerText = 'Testando minhas habilidades com DOM';
elementA.innerText = 'A Proz tem um site verdadeiramente magnífico';

elementUl.innerHTML = `
<ul>
    <li> Organizada  </li>
    <li> Com ótimo suporte </li>
    <li> Ótimos professores </li>
</ul>
`

elementOl.innerHTML = `
<ol>
    <li> <a href="https://open.spotify.com/intl-pt?flow_ctx=c99b22c0-c68c-4e27-9b58-769abf082d71%3A1750462526&creation_point=https%3A%2F%2Fopen.spotify.com%2F%3Fsp_cid%3Dfd4ee29bfd3f5adab004cc0fe318b27e%26device%3Ddesktop"> Spotify </a> </li>
    <li> <a href="https://github.com/feliixjuliana?tab=repositories"> Github </a> </li>
    <li> <a href="https://www.youtube.com/"> Youtube </a> </li>
</ol>
`