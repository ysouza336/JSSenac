'use strict';

const inputNota1 = document.querySelector("#nota1");
const inputNota2 = document.querySelector("#nota2");

const formMedia = document.querySelector("#form-media");

const pMedia = document.querySelector("#media");
const mostrarResultado = document.querySelector("#resultado");

const item = document.querySelector(".indice");

formMedia.addEventListener("submit", function(event){

    event.preventDefault();

    const nota1 = Number(inputNota1.value);
    const nota2 = Number(inputNota2.value);

    const resultado = (nota1 + nota2) / 2;

    const classe = resultado >=7 ? "aprovado" : "reprovado";

    mostrarResultado.textContent = resultado;

    pMedia.textContent = resultado >= 7 ? "Aprovado" : "Reprovado";

    pMedia.className = classe;
    mostrarResultado.className = classe;
  
});

