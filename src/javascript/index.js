const cartoes = document.querySelectorAll (".cartao");
const buttonAvancar = document.getElementById("button-avancar");
const buttonVoltar = document.getElementById("button-voltar");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add("selecionado");
}

buttonAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;
    
    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

buttonVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;
    esconderCartaoSelecionado ();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
})