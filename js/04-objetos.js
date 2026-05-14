'use strict';

// Exemplo 1: objeto com dados de uma pessoa
console.log("Exemplo 1:");
const pessoa = {
    // propriedade: valor
    nome: "Chapolin Colorado",
    idade: 25,
    cidade: "São Paulo",
    estado: "SP",
    "Empresa que Trabalha": "Senac" // atenção neste caso
};

// Acesso direto (pra programador)
console.log(pessoa);

// Acesso a cada propriedade (sintaxe usando .)
console.log(pessoa.nome); 
console.log(pessoa.idade +" anos");

console.log(pessoa["nome"]); // usando [] menos comum
console.log(pessoa["Empresa que Trabalha"]); // [] obrigatório

console.log("\n---"); // gambiarra pra pular linha

// Exemplo 2: objeto COM array
console.log("\nExemplo 2:");
const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: [
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei"
    ]
};

console.log(livro);

console.log(`${livro.titulo} é famoso`);
console.log(`${livro.volumes[0]} é o primeiro livro`);

const livros = [
    {
        titulo:"O Homem de Giz",
        ano: 2011
    },
    {
        titulo:"O pequeno príncipe",
        ano: 1947
    },
    {
        titulo:"Duna",
        ano: 1965
    }
];

console.log("livros");
console.log(livros[1].titulo); 

/* Mini-exercio: 
Acesse adequamente os dados doa rray livros e mostrea mensagem

Os livros Homem de Giz e Duna são titulos famosos na literatura. Respectivamente, foram lancados em 2011 e 1965.
*/

console.log(`Os livros ${livros[0].titulo} e ${livros[2].titulo} são titulos famosos na literatura. Respectivamente, foram lançados em ${livros[0].ano} e ${livros[2].ano} .`);


// document.getElementById('resultado').innerHTML = `<p style="font-weight: bold; font-size:2rem">Os livros ${livros[0].titulo} e ${livros[2].titulo} são titulos famosos na literatura. Respectivamente, foram lançados em ${livros[0].ano} e ${livros[2].ano} .</p>`

const resultado = document.getElementById('resultado');

resultado.style.backgroundColor ="black";
resultado.style.padding = "20px";
resultado.style.borderRadius ="10px";
resultado.style.color="white";
resultado.style.textAlign = "center";

resultado.innerHTML = `<p style="font-weight: bold; font-size:2rem">Os livros ${livros[0].titulo} e ${livros[2].titulo} são titulos famosos na literatura. Respectivamente, foram lançados em ${livros[0].ano} e ${livros[2].ano} .</p>`




