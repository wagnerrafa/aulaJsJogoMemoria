function embaralhar(lista) {
  let valor_temporario;
  let indice_aleatorio;

  for (let i = lista.length - 1; i !== 0; i--) {
    indice_aleatorio = Math.floor(Math.random() * i);

    valor_temporario = lista[i];
    lista[i] = lista[indice_aleatorio];
    lista[indice_aleatorio] = valor_temporario;
  }
  return lista;
}
function fechar(carta){
  carta.style.backgroundImage = "url('imagensBody/vingadores.png')"
  carta.onclick = processarClique;
}
function abrir(carta){
  carta.style.backgroundImage = `url('imagens/${imagens[Number(carta.id)]}')`;
  carta.onclick = null;
}
function travarCliques(){
  for(let carta of cartas){
      carta.onclick = null;
  }
}
function destravarCliques(){
  for(let carta of cartas){
      if(!carta.classList.contains("correta")){
        fechar(carta);
      }
  }
}
function parabens(){
  alert("Parabens você acertou todas");
  continuarJogo=confirm('Novo Jogo?');
  if(continuarJogo===true){
    novoJogo();
  }

}
function novoJogo(){
  window.parent.location.reload();
}

function processarClique(event) {
  abrir(event.target);
  if (cartaUm) {
    cartaDois = event.target;
    travarCliques();
    verificarIguais();
  }
  else {
    cartaUm = event.target;
  }
}
function verificarIguais(){
  if (cartaUm.style.backgroundImage !== cartaDois.style.backgroundImage) {
    setTimeout(function(){
      fechar(cartaUm);
      fechar(cartaDois);
      iniciarJogada();
    }, 1000);
  }
  else{
    cartaUm.classList.add("correta");
    cartaDois.classList.add("correta");
    iniciarJogada();
    ij=ij+1;
    if(ij==8){
    setTimeout(function(){
    parabens();
    }, 1000);
  }
}
}
function iniciarJogada(){
  cartaUm = null;
  cartaDois = null;
  destravarCliques();
}
// let iniciarJogo = document.querySelector(".button");
// console.log(iniciarJogo);


let cartas = document.querySelectorAll(".carta");
let cartaUm;
let cartaDois;
let ij=0;

let imagensSalvas = ["ferro.png", "aranha.png", "doutor.png", "hulk.png", "scarlett.png", "thor.png", "capita.png", "wanda.png"];
let imagens = imagensSalvas.concat(imagensSalvas);

imagens = embaralhar(imagens);

for (carta of cartas){
  abrir(carta);
}

setTimeout(function () {
  iniciarJogada();
}, 3000);