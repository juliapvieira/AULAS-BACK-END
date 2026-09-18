//  INÍCIO BACKEND - JAVASCRIPT

// VARIÁVEIS
// ANTIGO!!!!! Pode ser redeclarado e mudar o valor 
var idade = 10
var idade = 20 //não gera erro

// MAIS MODERNO, PODE MUDAR O VALOR, MAS NÃO PODE SER REDECLARADO
let nome = "júlia"
nome = "JU"; // permitido

// quando vc declara uma vez, e guarda, vc não precisa declarar dnv usando o let, vc só altera o nome 
// então: let idade = 10
// dai dps caso queira alterar não precisa colocar let de novo, apenas o nome da variável "idade" e redefinir do jeito que quer 


// const é fixo e não pode mudar de valor. uma vez declarado, não pode mudar o valor

//const NÃO pode ser alterada
const pi = 3.14;
// pi = 40; ❌ erro


//====================================
// FORMAS DE ESCREVER UM CÓDIGO
//====================================

//_________________________________________
// CAMEL CASE  ------- * A MAIS FAMOSA 
//A primeira palavra minúscula 
//Palavras seguintes começam com maiúsculo

//let nomeCompleto; let idadeUsuario; functionCalcularidade(){}
//_________________________________________

//===================================
//PASCALCASE
//- todas as palavras começam com letra maiúscula

//class UsuarioSistema {
    //  constructor(nome, idade) {
        //      this.nome = nome;
        //      this.idade = idade;
        //    }
        //  };
        
        
        
 //===================================
 //SNAKE CASE
 //Palavras separada por underscore _

//let nome_completo; let total_vendas;

