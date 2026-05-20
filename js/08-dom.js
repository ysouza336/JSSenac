'use strict';

/* Funções/métodos de seleção de elementos:
getElementById, getElementsByClassName, getElementsByTagName
querySelector, querySelectorAll */

/* Exemplo 01 */
// Selecionando os elementos
const pValor = document.querySelector("#valor");
const botaoSomar = document.querySelector("#somar");
const botaoSubtrair = document.querySelector("#subtrair");

/* Sobre Event Listener
Sempre que quisermos trabalhar com interações de qualquer natureza
em nossa página, é necessário adicionar um ouvinte de evento 
(addEventListener) ao elemento que desejamos manipular. E quando o evento
acontecer, uma função callback é a responsável por executar as ações
que queremos. */

// Variável para receber a contagem a cada clique
let contador = 0;

// Iniciando o botão subtrair com estado desabilitado
botaoSubtrair.disabled = true; // LIGADO

botaoSomar.addEventListener("click", function(){
    contador++; // Incrementando a contagem

    // Acessa o elemento selecionado e mostra o valor de contador
    pValor.textContent = contador;

    // Habilitando o botão subtrair (disabled false)
    botaoSubtrair.disabled = false;
});

botaoSubtrair.addEventListener("click", function(){
    /* 1) Como impedir que o contador fique negativo? */
    if(contador > 0) contador--; // Decrementando a contagem

    pValor.textContent = contador; // Acessa e mostra
    
    /* 2) Como desativar o botao subtrair quando a contagem for ZERO? */
    if(contador === 0) botaoSubtrair.disabled = true;
});

/* Exemplo 02 */

// Selecionando o elemento através do seletor de classe
const imgFoto = document.querySelector(".foto");

// Selecionando todos os botões do exemplo
const botoesDeFoto = document.querySelectorAll("[data-foto]");

// Percorrer os elementos do array de botões (NodeList)
for(const botao of botoesDeFoto){
    
    // Para cada botão, monitorar o evento de clique
    botao.addEventListener("click", function(){
        // console.log(botao.textContent);

        // Lendo os valores dos atributos data- usando dataset
        // Atenção: coloque apenas a parte que vem após o data-
        const imagem = botao.dataset.foto;
        const texto = botao.dataset.texto;

        // Adicionando ao img a imagem e o texto selecionados
        imgFoto.src = imagem;
        imgFoto.alt = texto;      
    });

}