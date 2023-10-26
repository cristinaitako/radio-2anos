//crianda a função tocaSomAplauso e buscando id da tecla para tocar.
function tocaSomaplausos    () {
    document.querySelector('som_tecla_aplausos').play();

}
//referencia constante listaDeTeclas que busca todas as classes tecla.

const listaDeTeclas = document.querySelectorAll('.tecla');

//criar a variavel de contagem 
let contador = 0;
//laco de repetição while
while (contador < 9){
  //chamada para tocar o som pelo indice do elemento da lista.
  listaDeTeclas[contador].onclick = tocaSomAplausos;
  contador = contador + 1
  console.log(contador)
}
