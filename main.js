//crianda a função tocaSomAplauso e buscando id da tecla para tocar.
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();

}
//referencia constante listaDeTeclas que busca todas as classes tecla.

const listaDeTeclas = document.querySelectorAll(".tecla");

//criar a variavel de contagem 
let contador = 0;
//laco de repetição while
while (contador < listaDeTeclas.length){
  //chamada para tocar o som pelo indice do elemento da lista.
  const efeito = listaDeTeclas[contador].classList[1];
  const idAudio = "#som_"+ efeito;
  listaDeTeclas[contador].onclick = function(){
    tocaSom(idAudio);
  }
  contador = contador + 1;
  console.log(contador);
}

