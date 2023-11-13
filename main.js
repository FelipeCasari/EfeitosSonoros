function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0;
//Estrutura de Repetição - Enquanto
while (contador<listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSomAplauso
    contador = 1;
}