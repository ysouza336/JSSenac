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

/*Exemplo 03 */
const textareaMensagem = document.querySelector("#mensagem");
const spanContadorCaracteres = document.querySelector("#contador");
const spanContadorRegressivo = document.querySelector("#regressivo");



//Captura do que é digitado em tempo real
textareaMensagem.addEventListener("input", function(){
    //Capturando a quantidade de caracteres digitados
    let totalCaracteres = textareaMensagem.value.length;

    spanContadorCaracteres.textContent = totalCaracteres;

    //Contador regressivo

    const limiteMaximo = 100;
    const contagemRegressiva = limiteMaximo - totalCaracteres; // limite - qtd digitada
    spanContadorRegressivo.textContent = contagemRegressiva;

    if(totalCaracteres >= limiteMaximo){
        //aqui estou fazendo css inline para esse proposito
        textareaMensagem.style.background ="pink";
        spanContadorCaracteres.style.color="red";
        spanContadorCaracteres.style.fontWeight="bold";

        // spanContadorCaracteres.classList.add("excesso");
    }
    else{
        
        // spanContadorCaracteres.classList.remove("excesso");
        spanContadorCaracteres.style.color="black"
        textareaMensagem.style.background ="transparent";
    }
});

/** Exemplo 04 */
const kbdTeclaPressionada = document.querySelector("#tecla-pressionada kbd");
const pagina = document.body; 

//Monitoramento de eventos de teclado sempre a partir do document
 
document.addEventListener("keypress", function(event){
    const teclaUsada = event.key;

    kbdTeclaPressionada.textContent = teclaUsada;

    if(teclaUsada === "a"){
        kbdTeclaPressionada.style.background = "yellow";

        Object.assign(pagina.style,{
            background:"darkblue",
            transition:"3s",
        }) 
    }
    if(teclaUsada ==="r"){
        kbdTeclaPressionada.style.background = "transparent";
        pagina.style.background = "#f4f4f4";
    }
});

/** Exemplo 05 */

const inputTarefa = document.querySelector("#tarefa");
const botaoAdicionar = document.querySelector("#adicionar");
const listaTarefas = document.querySelector("#lista");



botaoAdicionar.addEventListener("click", function() {
    //Capturar a tarefa digitada no input
    const tarefaDigitada = inputTarefa.value;

    //se não for digitada nenhuma tarefa, interrompa  a função
    if(tarefaDigitada === ""){
        alert("Campo Vazio  Favor Preencher")
        return
    };

   //Criar o elemento <li>
   const item = document.createElement("li");

   item.textContent = tarefaDigitada;

   listaTarefas.appendChild(item);

   //Aqui limpa o input apos digitação
   inputTarefa.value = "";
   inputTarefa.focus(); // aqui apos a digitação o campo fica em branco e retorna o foca para o input novamente.

   //Quando ocorrer o clique no item/tarefa, adicionar a classe feito
    item.addEventListener("click", function(){
        item.classList.toggle("feito");
    })

});

// Mapeamento de Evento, Detectar o ENTER durante o uso do input, e executar a função de clique do botão adicionar
inputTarefa.addEventListener("keyup", function(event){
    if(event.key === "Enter") botaoAdicionar.click();
});


/*Exemplo 06 */

const formExemplo06 = document.querySelector("#exemplo06");
const inputNome = formExemplo06.querySelector("#nome");
const inputIdade = formExemplo06.querySelector("#idade");
const pSaida = document.querySelector("#saida");

// Detectar o acionamento do formulario: evento submit
formExemplo06.addEventListener("submit", function(event) {

    // Anulando o coportamento padrao do formulario
    event.preventDefault();
    

    // capturando dados digitados

    const nome = inputNome.value.trim(); // removendo espaços no inicio/fim
    const idade = Number(inputIdade.value); // garantindo que a idade seja numero 

    /**Validações do Campo */
    if(nome === ""){
        pSaida.textContent = "Por Favor, Preencha o Nome"
        //aqui trata-se de estilização inline no JS
        Object.assign(pSaida.style,{
            fontSize: '1rem',
            color: 'white',
            backgroundColor: 'red',
            padding:'10px',
            borderRadius: '5px',
            textAlign: 'center',
        });
        return; // pare tudo (enquanto essa validação não for atendida)
    }
    if(isNaN(idade) || idade < 0 || idade > 120 || idade == ""){
        pSaida.textContent = "Por favor, preencha idade entre 0 a 120";

        Object.assign(pSaida.style,{
            fontSize: '1rem',
            color: 'purple',
            backgroundColor: 'darkgray',
            padding:'10px',
            borderRadius: '5px',
            textAlign: 'center',
        })
        return;
    }

    // Nenhuma das condiçoes anteriores  deu true? então significa que tudo deu certo!
    //Portanto, avisamos o usuario:

    pSaida.textContent = `Olá ${nome}, você tem ${idade} anos! Seus dados foram enviados!`;
        Object.assign(pSaida.style,{
            fontSize: '1rem',
            color: 'white',
            backgroundColor: 'blue',
            padding:'10px',
            borderRadius: '5px',
            textAlign: 'center',
            fontWeight: 'bold',
        });

    formExemplo06.reset();// reset(limpeza) dos campos
    inputNome.focus();//devolvendo o cursor (foco ao primeiro campo)
});

//Exemplo 07

const inputSenha = document.querySelector("#senha");
const botaoMostrar = document.querySelector("#mostrar");


//Ao pressionar botao
botaoMostrar.addEventListener("pointerdown", function(){
     inputSenha.type ="text";
     const newLocal = botaoMostrar.textContent = "🙈 Ocultar";
});
 
//Ao soltar ou liberar o botao
botaoMostrar.addEventListener("pointerup", function(){
   inputSenha.type = "password";
   botaoMostrar.textContent = "👁️ Mostrar Senha"
});








