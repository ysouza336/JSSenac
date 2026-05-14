    'use strict';
            /*operadores relacionais: usados para realizar comprações lógicas
            ==()igualdade, ===(iguldade estrita),
            <(menor), >(maior), <=(menor igual), >=(maior ou igual), !=(diferenca por valor)
              !==(diferenca por valor e tipo)  
            */
           let a = 10;
           let b = 10;
           let c = 100;
           let d = "100" //valor como string/texto

           console.log(a > b) //false
           console.log(a >= b) // true
           console.log(c != a); //true
           console.log(c !=a); // true

           //Comparando apenas VALOR (usando ==)
           console.log(c == d);
           console.log(c === d);
           
        /*
            if,else, esle if, switch case default:*/

            //Condicional simples
            console.log("\nExemplo 1: SIMPLES");

            let numero = 30;
            if(numero >= 20){
                console.log("Se você ver esta mensagem, é porque a condição é true (verdadeira)");
            }
            //Quando se trata de uma unica ação, podemos omitir as chaves e deixar em uma linha
            if(numero >= 20) console.log("Uma unica ação!")

            console.log("\nExemplo 2 : COMPOSTA (if/else)");
            const aluno ="Marcelo"
            let idade = 45; 
                if(idade >= 18){
                    console.log( aluno + " é maior de Idade");
                    
                }else{
                    console.log( aluno + " é menor de idade");
                }   
                if(idade < 18){
                    console.log(aluno +" é menor de idade ");
                }else{
                    console.log(aluno +" é maior de idade");
                }
             // assim aparece diretamente no html
            const resultado = document.getElementById('resultado');
                resultado.style.backgroundColor = "lightgreen";
                resultado.style.padding = "20px";
                resultado.style.textAlign = "center";
                resultado.style.fontSize = "1.2rem";
                resultado.style.fontWeight = "bold";
                // if(idade >= 18){
                //     resultado.innerHTML = aluno +" é maior de Idade";
                // }else{
                //     resultado.innerHTML = aluno + " é menor de idade";
                // }

                /*Operador chamado de ternario ?:
                versao curta do if/else (shorthand if/else)
                */
               let situacao = idade >= 18 ? "maior de idade" : "menor de idade";
               
               console.log(`${aluno} é ${situacao} de idade.`);

               //Condicional ENCADEADA (if/else if/else)
               console.log("\nExemplo 3: ENCADEADA (if/else if/elseif)");

               
               let media = 3.5;
               let status = media >= 7 ? "aprovado" : "reprovado";
               console.log(`O aluno está ${status}`);

               /*Determinar o desempenho de aluno com base na nota que teve.
               Desempenhos possoveis 
               media acima de 9 ? otimo 
               acima de 7? bom, 
               acima de 5? ruim, 
               media ate 5? pessimo*/


                if(media > 9){
                    resultado.innerHTML = "OTIMO 👌";
                }else if(media > 7){
                    resultado.innerHTML = "BOM 👍";
                }else if(media > 5){
                    resultado.innerHTML = "RUIM 👎";
                }else{// aqui, basta o else, pois se a media for menor ou igual a 5, já é pessimo
                    resultado.innerHTML = "PESSIMO 😒";
                }
