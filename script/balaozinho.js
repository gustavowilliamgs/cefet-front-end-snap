let regioesAnotadas = document.querySelectorAll('.regiao-anotada');
let balaozinhoEl = document.querySelector('#balaozinho');

regioesAnotadas.forEach(raEl => {

  raEl.addEventListener('mouseenter', e => {
    let regiaoAnotadaEl = e.currentTarget;
    balaozinhoEl.innerHTML = '<h2>' + regiaoAnotadaEl.dataset.titulo + '</h2>';
    balaozinhoEl.innerHTML += '<p>' + regiaoAnotadaEl.dataset.conteudo + '</p>';
  });

  raEl.addEventListener('mouseleave', e => {
    balaozinhoEl.innerHTML = '';
  });

  raEl.addEventListener('mousemove', e => {
    balaozinhoEl.style.left = e.pageX + 'px';
    balaozinhoEl.style.top = e.pageY + 'px';
  });
});

let botaoDefinirRegiaoEl = document.querySelector('#definir-regiao');
botaoDefinirRegiaoEl.addEventListener('click', e => {
  let x = document.querySelector('#balao-x').value;
  let y = document.querySelector('#balao-y').value;
  let largura = document.querySelector('#balao-largura').value;
  let altura = document.querySelector('#balao-altura').value;

  let regiao = regioesAnotadas[0];
  regiao.style.left = x + 'px';
  regiao.style.top = y + 'px';
  regiao.style.width = largura + 'px';
  regiao.style.height = altura + 'px';
});
