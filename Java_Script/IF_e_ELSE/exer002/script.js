function criarParagrafo() {
    let p = document.createElement('p');
    p.textContent = 'Você clicou!';
    document.body.appendChild(p);
  }

  const botao = document.querySelectorAll('button');

  for(var i = 0; i < botao.length ; i++) {
    botao[i].addEventListener('click', criarParagrafo);
}