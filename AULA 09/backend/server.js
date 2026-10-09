// NOSSA API DE CACHORROS 
//
//AGORA AS FOTOS NÃO SÃO MAIS BAIXADAS AUTOMATICAMENTE!
//elas DEVEM existir manualmente na pasta

//datas/fotos
//------------------------------------------------------------

//ROTAS
//caminho q vc vai consultar com o front end. Vamos consumir API com esses dois caminhos 
//GET / api/cachorros/aleatorio
//GET/ api/cachorros/:raca


//SEMPRE DECLARAR AS VARIÁVEIS NO INÍCIO DO ARQUIVO

//Importar o framework express para criar o servidor 
const express = require("express");
//chamando a biblioteca express

//Importar o CORS para permitir que o front end acesse a API
const cors = require("cors");
//Importa o módulo de arquivos do Node.js
const fs = require("fs");

//Importa utilidades para trabalhar com caminhos de arquivos
const path = require("path");
//Importa o arquivo JSON com as raças de cachorros
const cachorros = require("./datas/dogs.json");

//cria a aplicação express
const app = express();
//definir a porta que o servidor vai rodar
const PORT = 3000;

//habilitar o CORS para permitir que o front end acesse a API
app.use(cors());
//definir a porta que o servidor vai rodar
app.set("port", PORT);

//------------------------------------------------------------
//SERVIR OS ARQUIVOS ESTÁTICOS
//------------------------------------------------------------

//Nós falamos para o express que a pasta public é a raiz do nosso site
//"todos os arquivos que estiverem na pasta public podem ser acessados diretamente pelo navegador"
//"exemplo: http://localhost:3000/index.html"

//definir a pasta public como raiz para servir arquivos estáticos
app.use(
    "./fotos",
    express.static
    (path.join(__dirname, "datas/fotos")//caminho absoluto da pasta de fotos
)
)

//------------------------------------------------------------
//FUNÇÕES AUXILIARES
//------------------------------------------------------------

//função que sorteia um elemento de um array
function sortear(array) {
//gera um número aleatório entre 0 e o tamanho do array - 1
//array.length conta quantos elementos existem na lista
//math.random() gera um número aleatório entre 0 e 1
//math.random() - array.length - 1 - multiplica o número sorteado pela quantidade de itens
//math.floor() - tira a parte decimal do número, arredondando pra baixo

const i = Math.floor(Math.random() * array.length);
//const i - guarda a posição na variável
//retorna o elemento sorteado
return array[i];

}














