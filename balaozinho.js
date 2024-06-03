const balaozinhoEl = document.querySelector("#balaozinho");
const quadradinhosEl = document.querySelectorAll(".marcacao");

const marcacaoX = document.querySelector("#marcacao-x");
const marcacaoY = document.querySelector("#marcacao-y");
const marcacaoLargura = document.querySelector("#marcacao-largura");
const marcacaoAltura = document.querySelector("#marcacao-altura");

let marcacaoAtual = 0;

const definirMarcacao = () => {
  quadradinhosEl[marcacaoAtual].style.left = marcacaoX.value + "px";
  quadradinhosEl[marcacaoAtual].style.top = marcacaoY.value + "px";
  quadradinhosEl[marcacaoAtual].style.width = marcacaoLargura.value + "px";
  quadradinhosEl[marcacaoAtual].style.height = marcacaoAltura.value + "px";
};

marcacaoX.addEventListener("input", definirMarcacao);
marcacaoY.addEventListener("input", definirMarcacao);
marcacaoLargura.addEventListener("input", definirMarcacao);
marcacaoAltura.addEventListener("input", definirMarcacao);

quadradinhosEl.forEach((quadrado, i) => {
  quadrado.addEventListener("mouseover", (e) => {
    balaozinhoEl.classList.add("ativo");

    balaozinhoEl.innerHTML = `<h2>${e.target.dataset.titulo}</h2>`;
    balaozinhoEl.innerHTML += `<p>${e.target.dataset.conteudo}</p>`;
  });

  quadrado.addEventListener("mouseout", () => {
    balaozinhoEl.classList.remove("ativo");
    balaozinhoEl.innerHTML = ``;
  });

  quadrado.addEventListener("mousemove", (e) => {
    balaozinhoEl.style.left = `${e.pageX}px`;
    balaozinhoEl.style.top = `${e.pageY}px`;
  });

  quadrado.addEventListener("click", () => {
    quadradinhosEl[0].classList.remove("selecionada");
    quadradinhosEl[1].classList.remove("selecionada");
    quadradinhosEl[i].classList.add("selecionada");
    marcacaoAtual = i;
  });
});

const arquivoEl = document.querySelector("#input-arquivo");

arquivoEl.addEventListener("change", function () {
  const nomeArquivo = document.querySelector("#nome-arquivo");
  const imgEl = document.querySelector("#imagem");
  const arquivo = this.files[0];

  if (arquivo && arquivo.type.startsWith("image/")) {
    nomeArquivo.textContent = arquivo.name;
    const leitor = new FileReader();

    leitor.onload = (e) => {
      imgEl.src = e.target.result;
    };

    leitor.readAsDataURL(arquivo);
  } else {
    nomeArquivo.textContent = "Nenhum arquivo selecionado";
  }
});
