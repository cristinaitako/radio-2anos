//crianda a função tocaSomAplauso e buscando id da tecla para tocar.
function tocaSomaplausos    () {
    document.querySelector('som_tecla_aplausos').play();

}
//referencia constante listaDeTeclas que busca todas as classes tecla.

const listaDeTeclas = document.querySelectorAll('.tecla');
  listaDeTeclas[0].onclick = tocaSomAplausos;


