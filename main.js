function tocaSomAplausos(){
    document.querySelector("#som_tecla_aplausos").play();   
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();   
}

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[2].onclick = tocaSomAplausos

let contador = 0;
//Estrutura de repetição - Enquanto
while(contador<9){
    listaDeTeclas[0].onclick = tocaSomAplausos;
    contador = 1;
while(contador<listaDeTeclas.length){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    tecla.onclick = function(){
    const idAudio = `#som_${instrumento}`;
    }
    contador = contador + 1;
    console.log(instrumento);
}