'use strict';

// const inputNota1 = document.querySelector("#nota1");
// const inputNota2 = document.querySelector("#nota2");

// const formMedia = document.querySelector("#form-media");

// const pMedia = document.querySelector("#media");
// const mostrarResultado = document.querySelector("#resultado");
// const divResultado = document.querySelector("#situacao");
// const item = document.querySelector(".indice");

// formMedia.addEventListener("submit", function(event){

//     event.preventDefault();

//     const nota1 = Number(inputNota1.value);
//     const nota2 = Number(inputNota2.value);

//     const resultado = (nota1 + nota2) / 2;

//     const classe = resultado >=7 ? "aprovado" : "reprovado";

//     mostrarResultado.textContent = resultado.toFixed(2);

//     pMedia.textContent = resultado >= 7 ? "Aprovado" : "Reprovado";

//    divResultado.className = classe;
   
//     formMedia.reset();// resetando formulario
//     inputNota1.focus(); //devolver foco na nota 1
// });
const formulario = document.querySelector("#form-media");

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Impede recarregamento

        const formData = new FormData(evento.target);
        let soma = 0;
        let count = 0;

        // Soma todos os valores numéricos
        for (let valor of formData.values()) {
            const numero = parseFloat(valor);
            if (!isNaN(numero)) {
                soma += numero;
                count++;
            }
        }

        const media = count > 0 ? (soma / count) : 0;
        let situacao = "";
        let cor = "";

        // Lógica de Aprovação
        if (media >= 7) {
            situacao = "Aprovado";
            cor = "green";
        } else {
            situacao = "Reprovado";
            cor = "red";
        }

        // Exibe o resultado com cor dinâmica
        document.getElementById('situacao').innerHTML = 
            `Média: <strong>${media.toFixed(2)}</strong><br>` +
            `Situação: <strong style="color: ${cor}">${situacao}</strong>`;
    });

    /*Outra forma de resolver a media*/ 

// const formulario = document.querySelector("#form-media");

// formulario.addEventListener('submit', function(evento) {
//     evento.preventDefault();

//     const nota1 = parseFloat(document.getElementById('nota1').value);
//     const nota2 = parseFloat(document.getElementById('nota2').value);
//     const media = (nota1 + nota2) / 2;

//     const aprovado = media >= 7;

//     document.getElementById('situacao').innerHTML = 
//         `Média: <strong>${media.toFixed(2)}</strong><br>
//          Situação: <strong class="${aprovado ? 'aprovado' : 'reprovado'}">
//            ${aprovado ? 'Aprovado' : 'Reprovado'}
//          </strong>`;
// });