// Tipos de dados
//no JAVASCRIPT,, tudo o que armazenamos em variáveis tem um tipo. Esses tipos definem o que podemos fazer com os valores.

//principais tipos de dados:
//STRING (textos)
//NUMBER (Números)
//BOOLEAN (Verdadeiro ou Falso)
//OBJECT (Objetos, que agrupam informações)
//Array (Listas de valores)
//NULL (Valor vazio)
//Undefined (quando algo não foi definido.


//STRING (Textos)
//Uma string é um texto, sempre escrito entre aspas ("" ou '')
let nome = "Jarvis"
let mensagem = 'Olá, mundo"'

console.log(nome);
console.log(mensagem);

let saudacao = "Olá, " + nome + "!";
console.log(saudacao); //Exibe olá jarvis


//typeof
//typeof serve para descobrir o tipo de um valor ou variável 

let nomeDois = "Júlia"
console.log(typeof nomeDois);

let soma = 10 + 5;
console.log(soma);


//Boolean (Verdadeiro ou falso)
//Um boolean pode ter apenas dois valores: true or false

let maiorDeIdade = true;
let menorDeIdadee = false;

console.log(maiorDeIdade); //exibe true 
console.log (menorDeIdadee); // exibe false '""
 

let idade = 20;
let podeDirigir = idade >=18;
console.log(podeDirigir);