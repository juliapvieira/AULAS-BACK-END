//--------------------------------------
//FRONT END - Consome nossa API LOCAL
//--------------------------------------

//---------------------------------------   
//ELEMENTOS DO HTML
//----------------------------------------
//foto do cachorro
const dogImage = document.getElementById("dogImage");
//Nome da raça do cachorro
const breedName = document.getElementById("breedName");
//cachorro aleatório
const randomBtn = document.getElementById("randomBtn");
//botão para buscar cachorro por raça
const searchBtn = document.getElementById("searchBtn");
//input para digitar a raça do cachorro
const breedInput = document.getElementById("breedInput");
//area onde fica a imagem do cachorro

//usamos querySelector para pegar o elemento pelo nome da classe
const dogArea = document.querySelector(".dog-area");


//---------------------------------------
// URL DA NOSSA API LOCAL
//----------------------------------------
const API = "http://localhost:3000/api/cachorros";

//-------------------------------------------------
//FUNÇÃO PRINCIPAL PARA BUSCAR A FOTO DO CACHORRO
//-------------------------------------------------

async function buscarCachorro(url) {
    //adiciona a classe "loading" para mostrar o efeito de carregamento
    //normalmente usamos o "loading" para mostrar um spinner ou algum efeito visual de carregamento
    dogArea.classList.add("loading");

    try {
        //faz a requisição HTTP para a API
        const response = await fetch(url);

        //converte a resposta para JSON
        const data = await response.json();

        //mostra no console o que a API retornou
        console.log("Resposta da API:", data);

        //verifica se a resposta da API foi bem sucedida
        if (data.status === "error") {
            //mostra o erro no console
            //breedname - ELEMENTO HTML QUE MOSTRA O NOME DA RAÇA
            //data - OBJETO QUE CONTÉM A RESPOSTA DA API
            //.message - PROPRIEDADE DO OBJETO QUE CONTÉM A MENSAGEM DE ERRO
            //se a resposta foi bem sucedida, atualiza a imagem e o nome da raça
            breedName.textContent = data.message;
            //remove imagem
            dogImage.src = "";
            //execução da função 
            return;

        }
        //coloca a imagem do cachorro na tela
        // o src DEFINE O ENDEREÇO DA IMAGEM QUE VAI SER MOSTRADA
        dogImage.src = data.message;

        //extrair o nome da raça do endereço da imagem
        //exemplo de endereço: http://localhost:3000/fotos/husky-1.jpg
        
        //separa  URL em partes usando "/" como separador
        const parts = data.message.split("/");

        //pega a posição 5 do array, que é o nome do arquivo da imagem
        const raca = partes[5]

        //coloca a primeira letra da raça em maiúscula e o restante em minúscula
        breedName.textContent = 
        //raca.charAt(0) - pega a primeira letra da raça
        //raca.slice(1) - pega o restante da raça
        //toUpperCase() - transforma a letra em maiúscula
        //toLowerCase() - transforma o restante da raça em minúscula
        raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase();

    } catch (error) {
        console.error("Erro ao buscar cachorro:", error);

        //mostra a mensagem de erro na tela
        breedName.textContent = "Erro ao buscar cachorro";
        
        //remove imagem
        dogImage.src = "";

    } finally {
        //remove a classe "loading" para parar o efeito de carregamento
        dogArea.classList.remove("loading");
    }

}