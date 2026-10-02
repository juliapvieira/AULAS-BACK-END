// ----------------------------------------------
// SELECIONANDO ELEMENTOS DO DOM
//-----------------------------------------------

//Selecionado por ID
// console.log(document.getElementById("Título"));
let titulo = document.getElementById("titulo")
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let imagem = document.getElementById("imagem");

//Selecionado por classe
let caixas = document.getElementsByClassName("box");

//mostrar no console log
console.log(titulo);
console.log(caixas);
console.log(imagem);

//----------------------------------------
//FUNÇÃO PARA ALTERAR O CONTEÚDO
//----------------------------------------
function alterar() {
    titulo.innerHTML = "Novo título";
    subtitulo.innerHTML = "Novo subtítulo";
    paragrafo.innerHTML = "Parágrafo alterado";
    //Alterando imagem
    imagem.src = "./IMG/homem.avif";
    
}


//Alterando elemento da classe
caixas[0].innerText = "Primeiro parágrafo alterado";
caixas[1].innerText = "Segundo parágrafo alterado";

