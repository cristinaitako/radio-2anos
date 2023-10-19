function tocaSomaplausos    () {
    document.querySelector('som_tecla_aplausos').play();

}
document.querySelector('tecla_aplausos').onclick = tocaSomaplausos();

const listaDeTeclas = querySelectorAll(".teclas");
listaDeTeclas[2].onclick = tocaSomaplausos;


