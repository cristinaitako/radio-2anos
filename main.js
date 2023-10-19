function tocaSomaplausos    () {
    document.querySelector('som_tecla_aplausos').play();

}
document.querySelector('tecla_aplausos').onclick = tocaSomaplausos();

const listaDeTecla = querySelectorAll(".tecla");
listaDeTecla[2].onclick = tocaSomRisada;


