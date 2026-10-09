
//==========================
// NOSSA API DE CACHORROS
//==========================
//
// Agora as fotos NÃO são mais baixadas automaticamente!.
// Elas DEVEM existir manualmente na pasta
// data/fotos
//==========================

// ROTAS:
// GET /api/cachorros/aleatorio
// GET /api/cachorros/:raca
//==========================
// NOSSA API DE CACHORROS
//==========================
//
// Agora as fotos NÃO são mais baixadas automaticamente!.
// Elas DEVEM existir manualmente na pasta
// data/fotos
//==========================

// ROTAS:
// GET /api/cachorros/aleatorio
// GET /api/cachorros/:raca

// Importar o framework Express para criar o servidor
const express = require("express");
// Importar o CORS para permitir requisições de outros dominios (ex: frontend)
const cors = require("cors");
// Importa o módulo de arquivos do NODE
const fs = require("fs");
// Importa utilidades para trabalhar com caminhos de arquivos
const path = require("path");
// Importa o arquivo JSON que contém as raças e fotos
const cachorros = require("./data/dogs.json");
// cria a aplicação Express
const app = express();
// definir a porta onde o servidor irá rodar
const PORT = 3000;
// Habilitar o uso do CORS na aplicacao
app.use(cors());

//=================================================
// SERVIR ARQUIVOS ESTÁTICOS
//=================================================

// Nós falamos para o express
// "Tudo o que estiver na pasta data/fotos pode ser acessado pela URL /fotos"
// Exemplo:
// http://localhost:3000/fotos/husky/1.jpg

app.use(
  "/fotos",
  express.static(
    path.join(__dirname, "data/fotos"), //caminho real da pasta do servidor
  ),
);

//=================================================
// FUNÇÃO AUXILIAR
//=================================================

// função que recebe um array e retorna um item aleatório dele
function sortear(array) {
  // gera um numero aleatório entre 0 e o tamanho do array
  // array.length - conta quantos itens existem na lista
  // math.random() - Sorteia um número decimal entre 0 e 1
  // math.random() - array.length - Multiplica o número sorteado pela quantidade de itens
  // math.floor() - tira a parte decimal, arredondando para baixo.
  const i = Math.floor(Math.random() * array.length);
  // const i = guarda a posição na variavel i
  // retorna o item sorteado
  return array[i];
}

//================================
// ROTAS DA API
//================================

// ROTA 1 - Cachorro aleatório
app.get("/api/cachorros/aleatorio", (req, res) => {
  // req - request(requisição) = é o pedido que chega ao servidor, por exemplo, o navegador pede uma foto de cachorro
  // res - response(resposta) = é o que o servidor envia de volta, por exemplo, o endereço da foto do cachorro

  // pegar todas as fotos de todas as raças
  // object.values pega os valores do objeto
  // flat transforma tudo em um único array
  const todasAsFotos = Object.values(cachorros).flat();

  //sorteia uma foto aleatória
  const item = sortear(todasAsFotos);

  //responder para o cliente em formato JSON
  res.json({
    //status da resposta
    status: "success",
    //URL da imagem que foi sorteada
    message: `http://localhost:${PORT}/fotos/${item}`,
  });
});

// ROTA 2 - Cachorro por raça
// exemplo de acesso:
// http://localhost:3000/api/cachorros/husky

app.get("/api/cachorros/:raca", (req, res) => {
  //pega o parametro da URL (ex: husky)
  const raca = req.params.raca.toLocaleLowerCase();
  //params = contém os parâmetros definidos na URL da rota
  //.raca = acessa o parâmetro chamado raca.
  //.toLowerCase() = Transforma todas as letras em minúsculas
  if (!cachorros[raca]) {
    //cachorros[raca]: procurar a raça dentro do objeto *cachorros*
    //!: significa não: Nesse caso, verifica se a raça não existe ou se seu valor é falso
    //se não existir, retorna erro 404
    res.status(404).json({
      status: "error",
      message: `Raça "${raca}" não encontrada`,
    });

    //encerra a execução da rota
    return;
  }

  //sorteia uma foto da raca solicitada
  const item = sortear(cachorros[raca]);

  // retorna a resposta em JSON
  res.json({
    status: "success",
    message: `http://localhost:${PORT}/fotos/${item}`,
  });
});

//======================================
// INICIA O SERVIDOR
//=====================================

//inicia o servidor express
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📂 Coloque as fotos manualmente em: data/fotos/`);
});

// //NOSSA API DE CACHORROS 
// //
// //AGORA AS FOTOS NÃO SÃO MAIS BAIXADAS AUTOMATICAMENTE!
// //elas DEVEM existir manualmente na pasta

// //datas/fotos
// //------------------------------------------------------------

// //ROTAS
// //caminho q vc vai consultar com o front end. Vamos consumir API com esses dois caminhos 
// //GET / api/cachorros/aleatorio
// //GET/ api/cachorros/:raca


// //SEMPRE DECLARAR AS VARIÁVEIS NO INÍCIO DO ARQUIVO

// //Importar o framework express para criar o servidor 
// const express = require("express");
// //chamando a biblioteca express

// //Importar o CORS para permitir que o front end acesse a API
// const cors = require("cors");
// //Importa o módulo de arquivos do Node.js
// const fs = require("fs");

// //Importa utilidades para trabalhar com caminhos de arquivos
// const path = require("path");
// //Importa o arquivo JSON com as raças de cachorros
// const cachorros = require("./datas/dogs.json");

// //cria a aplicação express
// const app = express();
// //definir a porta que o servidor vai rodar
// const PORT = 3000;

// //habilitar o CORS para permitir que o front end acesse a API
// app.use(cors());
// //definir a porta que o servidor vai rodar
// app.set("port", PORT);

// //------------------------------------------------------------
// //SERVIR OS ARQUIVOS ESTÁTICOS
// // ------------------------------------------------------------

// //Nós falamos para o express que a pasta public é a raiz do nosso site
// //"todos os arquivos que estiverem na pasta public podem ser acessados diretamente pelo navegador"
// //"exemplo: http://localhost:3000/index.html"

// //definir a pasta public como raiz para servir arquivos estáticos
// app.use(
//     "./fotos",
//     express.static
//     (path.join(__dirname, "datas/fotos")//caminho absoluto da pasta de fotos
// )
// )

// //------------------------------------------------------------
// //FUNÇÕES AUXILIARES
// //------------------------------------------------------------

// //função que sorteia um elemento de um array
// function sortear(array) {
// //gera um número aleatório entre 0 e o tamanho do array - 1
// //array.length conta quantos elementos existem na lista
// //math.random() gera um número aleatório entre 0 e 1
// //math.random() - array.length - 1 - multiplica o número sorteado pela quantidade de itens
// //math.floor() - tira a parte decimal do número, arredondando pra baixo

// const i = Math.floor(Math.random() * array.length);
// //const i - guarda a posição na variável
// //retorna o elemento sorteado
// return array[i];

// };

// //------------------------------------------------------------
// //ROTAS DA API
// //------------------------------------------------------------

// //ROTA 1 - SORTEAR UM CACHORRO ALEATÓRIO
// //GET /api/cachorros/aleatorio
// app.get("/api/cachorros/aleatorio", (req, res) => {


// //req - request - requisição do cliente
// //res - response - resposta do servidor

// //pegar todas as raças de cachorros do arquivo JSON
// //object.values() - pega todos os valores do objeto e retorna um array
// //flat() - transforma um array de arrays em um array único
// const todasAsFotos = Object.values(cachorros).flat();


// //sortear uma foto aleatória
// const item = sortear(todasAsFotos);

// //retornar a foto sorteada para o cliente
// res.json({ 
//     //status da resposta
//     status: "sucess",
// //URL da foto sorteada
//     url: `http://localhost:${PORT}/fotos/${item}`
// });
// });

// //ROTA 2 - BUSCAR UMA RAÇA ESPECÍFICA
// //EXEMPLO: GET /api/cachorros/husky
// //localhost:3000/api/cachorros/husky
// app.get("/api/cachorros/:raca", (req, res) => {

// //pega o parâmetro da URL (ex: husky)
// const raca = req.params.raca.toLocaleLowerCase();

// //params = contém os parâmetros da URL
// //.raca = pega o parâmetro "raca" da URL
// //.tolocaleLowerCase() = transforma todas as letras em minúscula
// //parâmetro da URL é sempre uma string, então usamos toLocaleLowerCase() para garantir que seja minúscula
// if (!cachorros[raca]) {
//     //se a raça não existe no arquivo JSON, retorna um erro
//     return res.status(404).json({
//         status: "error",
//         message: "Raça não encontrada"
//     });
//     //encerrar a rota com o return para não continuar executando o código
//     return; 
// }
// })

// //sorteia uma foto aleatória da raça solicitada
// const item2 = sortear(cachorros[raca]);

// //retorna a foto sorteada para o cliente
// res.json({
//     status: "sucess",
//     message: `http://localhost:${PORT}/fotos/${item}`
// });
// app.listen(PORT, () => {
//     console.log(`Servidor rodando em: http://localhost:${PORT}`);
//     console.log(`coloque as fotos manualmente na pasta datas/fotos`);
// });