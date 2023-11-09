//crianda a função tocaSomAplauso e buscando id da tecla para tocar.
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();

}
//referencia constante listaDeTeclas que busca todos os botoes com as classes tecla.

const listaDeTeclas = document.querySelectorAll(".tecla");

//criar a variavel de contagem 
let contador = 0;
//laco de repetição while
while (contador < listaDeTeclas.length){
  //faz funcionar som com teclas.
  const efeito = listaDeTeclas[contador].classList[1];
  const idAudio = "#som_"+ efeito;
  listaDeTeclas[contador].onclick = function(){
    tocaSom(idAudio);
  }
  contador = contador + 1;
  console.log(contador);
}

