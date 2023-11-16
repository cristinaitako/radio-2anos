//crianda a função tocaSomAplauso e buscando id da tecla para tocar.
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();

}
//referencia constante listaDeTeclas que busca todos os botoes com as classes tecla.

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
//laco de repetição "while"foi trocado por "for",tecla, efeito, idAudio e tocaSom.
for(let contador = 0 < listaDeTeclas.length; contador = contador++;){
  const tecla = listaDeTeclas[contador]
  const efeito = tecla.classList[1]; //busca do item 1 dos botoes 
  const idAudio = `#som_${efeito}`; // uso do template string
  tecla.onclick = function(){ //funçao anomina auxiliar ao TocaSom
    tocaSom(idAudio);
  }
  tecla.onkeydown = function (){
    tecla.classList.add("ativa");
  }
  tecla.onkeyup = function(){
    tecla.classList.remove("ativa");
  }
}


