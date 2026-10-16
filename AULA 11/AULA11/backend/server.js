//===============================================
//server.js - back end completo
//===============================================

//PARTE 1: Importar as ferramentas do Node.js
const express = require('express');              //Biclioteca para criar o servidor web
const path = require('path');                    //ajuda a montar os caminhos dos arquivos
const { DatabaseSync } = require('node:sqlite');//Banco de dados SQLite (ja vem com o Node.js)

//PARTE 2: Criar o servidor web e abrir o banco de dados
const app = express();                                                 //cria o servidor web
const banco = new DatabaseSync(path.join(__dirname, 'tarefas.db'));      //cria o banco de dados e abre o banco (se não existir cria o arquivo). -----> __dirname = pasta desse arquivo 



//cria as tabelas do banco de dados (se não existirem)
//está executando um comando SQL para criar a tabela "tarefas"

banco.exec(` 
CREATE TABLE IF NOT EXISTS tarefas (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo      TEXT NOT NULL,
    concluida   INTEGER DEFAULT 0
     );
`);

//TITULO TEXT NOT NULL É um campo de texto obrigatório (não pode ser nulo) para armazenar o título da tarefa.
//ID INTEGER PRIMARY KEY AUTOINCREMENT É um campo inteiro que serve como chave primária da tabela e é incrementado automaticamente a cada nova tarefa adicionada.
//CONCLUIDA INTEGER DEFAULT 0 É um campo inteiro que indica se a tarefa foi concluída ou não. O valor padrão é 0 (não concluída).


//PARTE 3: Configurar o servidor web para receber requisições HTTP
//app.use: TODO pedido que chegar no servidor vai passar por aqui

app.use(express.json()); //configura o servidor para receber dados no formato JSON
app.use(express.static(path.join(__dirname, 'public'))); //configura o servidor para servir arquivos estáticos (HTML, CSS, JS) da pasta "public"      


//==================================================
//PARTE 4: Criar as rotas do servidor web (API REST)
//==================================================
//ROTA: a combinação do método HTTP + o caminho da URL que o servidor vai responder
//API: é um conjunto de rotas que permitem que o cliente (front-end) se comunique com o servidor (back-end) para realizar operações no banco de dados.
//
//Toda rota tem 3 partes: o método HTTP, o caminho da URL e a função que vai tratar a requisição e enviar a resposta para o cliente.
//requisicão: é o pedido que o cliente faz para o servidor (ex: "me dê a lista de tarefas")
//resposta: é a resposta que o servidor envia para o cliente (ex: "aqui está a lista de tarefas")

//Operação / Método HTTP / Caminho da URL / Função que trata a requisição e envia a resposta
//------------------------------------------------------------------------------------------------

//CREATE |    POST     | /tarefas       | INSERT              cria uma nova tarefa no banco de dados
//READ   |    GET      | /tarefas       | SELECT              lê a lista de tarefas
//UPDATE |    PUT      | /tarefas/:id   | INSERT              atualiza uma tarefa existente
//DELETE |    DELETE   | /tarefas/:id   | DELETE              remove uma tarefa existente

//--------------------------------------------CREATE-------------------------------------------------------- 

//POST /Tarefas - salvar uma tarefa nova no banco de dados (sqlite)
app.post ('/tarefas', (requisicao, resposta)=> {
    const titulo = requisicao.body.titulo; //texto enviado pela página

    //se o titulo estiver vazio, avisa que deu erro (400) e para aqui
    if (!titulo)
        return resposta.status(400).json({erro:'Digite um título'});
//INSERT: adicionar uma linha na tabela. (lembre-se, os "?" são trocados pelo valor do titulo)]
banco.prepare('INSERT INTO tarefas (titulo) VALUES(?)').run(titulo);
resposta.json({ok: true}) //responde que deu certo. 
});

//PASSO A PASSO do que aconteceu no CREATE
//1) o usuário digita no campo e clica em "adicionar" no navegador
//2) o front manda um POST para /tarefas com {"titulo:..."}
//3) chega aqui no server. O express escolhe essa rota porque método POST e o endereço é tarefas
//4) "requisição.body.titulo" é o texto que o front mandou, lembrando só funciona por causa do express.json( ) que está lá em cima
//5) Validação: se vier vazio, respondemos com status 400(="pedido errado") em um JSON de erro. NUNCA valide no front, sempre valide aqui
//6) insert em tarefas
//7) resposta

//---------------------------------------------------LER--------------------------------------------------

//GET /tarefas -> devolve todas as tarefas
app.get('/tarefas', (requisicao, resposta) => {
//SELECT: Busca todas as linhas da tabela 
const tarefas = banco.prepare('SELECT * FROM tarefas ORDER BY id DESC'). all();
resposta.json(tarefas);

});

///================================================UPDATE=============================================

//PUT /tarefas/5 ---> muda a tarefa de id 5 (marca como feita ou pendente)
app.put ('/tarefas/:id', (requisicao, resposta) => {
const id = requisicao.params.id;
const concluida = requisicao.body.concluida;



//UPDATE: Alterar a linha que tem o ID
banco.prepare('UPDATE tarefas SET concluida = ? WHERE id = ?'). run(concluida, id);
resposta.json({ok: true});
});

//-------------------------------------------------DELETE---------------------------------------------
//DELETE /tarefas/5 ----> apaga a tarefa de ID 5
app.delete('/tarefas/:id', (requisicao, resposta) => {
    const id = requisicao.params.id;

    //delete: remove a linha que tem esse ID
    banco.prepare('DELETE FROM tarefas WHERE id = ?').run(id);

    resposta.json({ok:true});

})

//==================================================
//PARTE 5: LIGAR O SERVIDOR
//==================================================

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});


