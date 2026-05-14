'use strict';

const resultado = document.getElementById('resultado');
Object.assign(resultado.style, {
  fontSize: '1.5rem',
  color: '#000',
  backgroundColor: 'lightgray',
  padding:'10px',
  borderRadius: '5px',
  textAlign: 'center',
});

let html = '';
const appendResultado = texto => {
  html += texto + '<br>';
  resultado.innerHTML = html;
};

let contador = 1;


console.log('Exemplo 1: while (enquanto)');

/*Logica: enquanto uma condição for verdadeira, faça/execute ações/processos */

while (contador <= 5) {
  console.log('Valor da variavel: ' + contador);

  contador = contador + 1;
}

console.log('\nExemplo 2: for(para):');

/* Logica: execute uma serie de ações a apartir de um valor inicial ate um valor final */
for (let i = 1; i <= 10; i++) {
  console.log('Valor da variavel: ' + i);

}

console.log('\nExemplo 3: loop para acessar ARRAY');


const bandas = ['Slayer', 'Nightwish', 'Rush', 'Metalica', 'Iron Maiden', 'Testament', 'Iced Earth',"Scorpions", "Megadeth", "Black Sabbath", "Dream Theater", "Helloween", "Judas Priest", "Sepultura", "Pantera", "Motörhead", "Anthrax", "Lamb of God", "Avenged Sevenfold", "System of a Down"];


/*Comecamos em ZERO obrigatoriamente, e acondicção de repetição é enqaunto o "i" for menor que a quantidade de elementos no array*/

//Boa pratica guardar o tamanho do array antes de iniciar o loop.
let tamanhoArray = bandas.length; // cache (memoria)

for (let i = 0; i < tamanhoArray; i++) {
  console.log('Banda: ' + bandas[i]);
  appendResultado('Banda: ' + bandas[i]);
}

console.log("\nExemplo 4: for/of: loop especifico para Array:");
const alunos =["Marcelo","Alexandre","Emillye","Yuri","Raquel"];

for (const aluno of alunos) {
  console.log('Aluno: ' + aluno);
  appendResultado('Aluno: ' + aluno);
}

console.log("\nExemplo 5 for/in: loop especifico para OBEJTO:");

const pessoa = {
    nome: "Yuri",
    idade: 28,
    profissao: "Desenvolvedor",
    cidade: "São Paulo"
}
/*Logica: acessandoas propriedades do objeto pessoa */
for(const propriedade in pessoa){
  console.log(pessoa[propriedade]);//traz os valores
//   appendResultado(propriedade + ': ' + pessoa[propriedade]);
}
