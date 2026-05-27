'use strict';

const formAddress = document.querySelector("#form-address");
const inputCep = formAddress.querySelector("#cep");
const inputEndereco = formAddress.querySelector("#endereco");
const inputBairro = formAddress.querySelector("#bairro");
const inputCidade = formAddress.querySelector("#cidade");
const inputEstado = formAddress.querySelector("#estado");
const pMensagem = formAddress.querySelector("#mensagem");
const listaInputs = [inputBairro,inputCep,inputCidade,inputEndereco];

//Aplicando a mascara ao CEP

VMasker(inputCep).maskPattern("99999-999");


inputCep.addEventListener("input", function(){
    const cepDigitado = inputCep.value;
    console.log(cepDigitado);

    if(cepDigitado.length === 9){
        //chamando a função
        buscarCep(cepDigitado);
    }  
});

//Quando esta função for chamada, ela receberá o numero do cep digitado
async function buscarCep(numeroCep){
    //Montar a consulta a API
    const urlConsulta = `https://viacep.com.br/ws/${numeroCep}/json/`;

    pMensagem.textContent = "Aguarde, Buscando";
    pMensagem.style.color="black"
    /**Processo de comunicação com a  API, busca, recebimento e tratamento de erro */

    try {
        //Iniciar a comunicação com a APIusando a função fetch 
        //Obs.: usamos await para "aguardar" a respota da API
        //Obs.: sempre que usar await coloque async na declaração da função
       const resposta = await fetch(urlConsulta);

       const dados = await resposta.json();
        inputEndereco.value = dados.logradouro;
        inputBairro.value = dados.bairro;
        inputCidade.value = dados.uf;
        inputEstado.value = dados.estado;


        //Se o objeto dados tiver a prop. erro, significa que o CEP não foi encontrado
       if(dados.erro){
            pMensagem.textContent = "CEP não encontrado!";
            pMensagem.style.color = "purple"
            return
        }
       
        pMensagem.textContent = "CEP encontrado!";
        pMensagem.style.color = "green";

        

    } catch (error) {
        console.error("Erro na requisição: "+ error);
        pMensagem.textContent = "Erro na Busca do CEP"
        pMensagem.style.color="red";
    }
    
}
function limparCampos(preservar = null) {
    for (let input of listaInputs) {
        if (input !== preservar) {
            input.value = '';
        }
    }
}

// Chamada:
if (inputCep != "") {
    limparCampos(inputCep); // passa o input que deve ser preservado
}