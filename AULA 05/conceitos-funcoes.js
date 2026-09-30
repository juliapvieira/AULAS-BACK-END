//FUNÇÕES EM JAVA SCRIPT

//O que é uma função?
//Uma função é um bloco de código reutilizável, criado pra executar uma tarefa específica.

//ANALOGIA SIMPLES
//Você vai colocar valores (parâmetros)
//Ela processa
//Devolve um resultado (return)


//----------------------------------------------
//Estrutura básica de uma função
//-----------------------------------

//function nomeDaFuncao(parametro1, parametro2) {
//      código que será executado
//      return resultado;
//    }

//function ----> palavra-chave
//nomeDaFunção --> nome da função
//parâmetros --> valores que a função recebe
//return ----> valor que a função devolve


//EXEMPLOS

//1 - Somar dois números

function somar(a,b) {
    return a + b;
}

console.log(somar(2,15))

//2- Converter real para dólar
function realParaDolar(valorReal, cotacao) {
    return valorReal / cotacao;
}

console.log(realParaDolar(10, 5.20).toFixed(2)) // tofixed serve para definir quantas casas decimais vc quer que apareça

//3- Converter dólar pra real
function dolarParaReal(valorDolar, cotacao) {
    return valorDolar * cotacao;
}

console.log(dolarParaReal(10, 5.20).toFixed(2)) 

// 4- Aumento de salário (Você merece 25% de aumento)
function aumentoSalario(valorSalario, bonus) {
    return valorSalario * 25 / 100 + valorSalario
}

console.log("Seu salário aumentou 25%, totalizando " + aumentoSalario (1400, 0.25 + " reais"))

//modo do professor
//function calcularAumento(salario){
//return salario + (salario * 0,25)
//
//}
//console.log(calcularAumento(2000))

// 5- Verifique se é par ou ímpar
let numero = 16;
    if (numero % 2 === 0) {
    console.log ("o número é par");

     } else {
    console.log ("o número é impar");

}

//JEITO DO PROFESSOR
//function parOuImpar(numero) {
//return numero %2 ===0 ?"par" : "impar"
//se o resto for 0 ---> retorna "par"
//caso contrário ---> retorna "impar"
//}
//console.log(parOuImpar(6));



