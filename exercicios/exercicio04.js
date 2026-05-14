'use strict';
//let estoque = 20;
const resultado = document.getElementById('resultado');
resultado.style.fontSize="1.5rem";
resultado.style.fontWeight="bold";
resultado.style.backgroundColor="Blue";
resultado.style.padding="1.5rem";
resultado.style.color="white";
resultado.style.textAlign="center";

let quantidade = 5;
//string vazia para receber a mensagem do estoque, para mostrar no HTML
let mensagem = "";

let estoque = quantidade <= 0 ? "Estoque Crítico" : quantidade <= 10 ? "Estoque Baixo" : "Estoque Normal";
console.log(estoque)


/*Aqui aparece no HTML*/ 

if( quantidade <= 0){
    mensagem = "Estoque Crítico - Sem produtos";
} else if(quantidade <= 10){
    mensagem = "Estoque Baixo";
} else{
    mensagem = "Estoque Normal";
}

resultado.innerHTML = mensagem;
