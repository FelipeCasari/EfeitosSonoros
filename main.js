function tocaSomAplauso(){
    document.querySelector("#som_tecla_Aplauso").play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')
listaDeTeclas[2].onclick = tocaSomAplauso

let contador = 0;
//Estrutura de Repetição - Enquanto
while (contador<9){
    listaDeTeclas[0].onclick = tocaSomAplauso
    contador = 1;
}