function embaralhar(lista) {
    let valor_temporario;
    let indice_aleatorio;
  
    for (let i = lista.length -1; i !== 0; i--) {
        indice_aleatorio = Math.floor(Math.random() * i);
  
        valor_temporario = lista[i];
        lista[i] = lista[indice_aleatorio];
        lista[indice_aleatorio] = valor_temporario;
    }
    return lista;
  }
  
  let cartas = document.querySelectorAll(".carta");

  let cartaVirada = null;
  
  let imagensSalvas = ["ferro.png", "aranha.png", "doutor.png", "hulk.png", "scarlett.png", "thor.png", "capita.png", "wanda.png"];
  
  let imagens = imagensSalvas.concat(imagensSalvas);
  
  imagens = embaralhar(imagens);
  
  for (let i = 0; i < cartas.length; i++) {
    cartas[i].style.backgroundImage = `url("imagens/${imagens[i]}")`;
  }
  
  setTimeout(function () {
    for (let carta of cartas) {
      carta.style.backgroundImage = 'url("imagensBody/vingadores.png")';
      carta.onclick = function () {
        carta.style.backgroundImage = `url("imagens/${imagens[Number(carta.id)]}")`;
        if (cartaVirada && cartaVirada.id !== carta.id) {
          setTimeout(function () {
            if (cartaVirada.style.backgroundImage === carta.style.backgroundImage) {
              cartaVirada.onclick = null;
              carta.onclick = null;
            }
            else {
              carta.style.backgroundImage = 'url("imagensBody/vingadores.png")';
              cartaVirada.style.backgroundImage = 'url("imagensBody/vingadores.png")';
            }
            cartaVirada = null;
          }, 1500)
        }
        else {
          cartaVirada = carta;
        }
      }
    }
  }, 3000);
  

  