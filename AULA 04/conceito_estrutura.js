//Estrutura condicionais - Tomando decisões
//as estruturas condiionais permitem executar executar diferentes blocos de código dependendo de uma condição

//If- ELSE - Condicionais
//if - Verifica se uma condição é verdadeira e executa o código dentro dele, se a condição for falsa, o ELSE pode executar outro bloco de código 

let idade = 12

if (idade >= 18) {
    console.log("Você é maior de idade")

} else {
    console.log("Você é menor de idade")
}

//if, else, if, else (multipllas condições)
       let idade2 = 10;
       if (idade2 < 12) {
        console.log("Você é uma criança"); 

       }else if (idade2 < 18) {
        console.log ("Você é um adolescente");
       }else {
        console.log ("Você é um adulto0");
       }