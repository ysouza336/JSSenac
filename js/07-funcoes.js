'use-strict';

// 1) Função anonima: criada/associada a uma constante
const exemplo1 = function(){
    console.log("Olá! Esta é uma função anônima");
};

//Chamar/Invocar a função
exemplo1();

/* Atenção: nesta sintaxe (funcao anonima) voce deve Primeiro declarar a função, para só DEPOIS chama-la */

// 2) função nomeada/declarada: criada de forma livre

function exemplo2(){
    console.log("OI,Está é uma função delcarada/nomeada");
}
exemplo2();

// 3) Arrow Function (funcao flecha/seta): cria/associa a uma constante

const exemplo3 = () => {
    console.log("E aqui temos uma arrow function!");
}

exemplo3();

/*Funções com parametros (ou argumentos)
Usamos parametros quando e necessario que a funcção receba algum dado de entrada para realizar processamentos.

Exemplo: uma função que calcula frete, precisaria receber dados como CEP de entrega, peso dos produtos
*/ 
console.log("\nFunções com parâmetros/argumentos");
//parametro padrao, ou seja caso não seja atribuido nada sera o valor definido como padrao 
function darUmaSaudacao(nome = "Visitante"){
    console.log("Bem-Vindo(a) " + nome);
}
//Chamando a função passando valores (nomes) diferentes
darUmaSaudacao("Marcelo");
darUmaSaudacao("Gabriel");
darUmaSaudacao("Pérola");
darUmaSaudacao();

/*Funções com parâmetros e RETORNO de resultado */ 

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

console.log("Resultado 1: " +multiplicar(10, 5));
let resultado2 = multiplicar(100,50); // recebendo/guardando o rertono da função

console.log("Resultado 2: " + resultado2);

/*Formatar valores monetarios */
let preco = 5000;
let desconto = preco * 0.1; //10%
let precoFinal = preco - desconto; 

function formatarMoeda(valor, digitos = 2){
    return new Intl.NumberFormat("pt-br" , {
        style:"currency",
        currency:"BRL",
        minimumFractionDigits: digitos
    }).format(valor);
}
console.log("Preço inicial: " + formatarMoeda(preco));
console.log("Desconto " + formatarMoeda(desconto,2));
console.log("Preço Final " + formatarMoeda(precoFinal));






