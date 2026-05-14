
'use strict';

const aluno= {
    
    nome:"Yuri Souza",
    dataNascimento: "07/06/1997",
    listaTelefone:["11948481451", "11921513178"],
    endereco:{
        rua: "Rua Che",
        numero:16,
        bairro: "Itaim Paulista"
    }
    
}

console.log(aluno.nome,"\n" ,aluno.listaTelefone[1],"\n" ,aluno.endereco.bairro);


const resultado = document.getElementById('resultado');

 resultado.style.backgroundColor ="black";
 resultado.style.padding = "20px";
 resultado.style.borderRadius ="10px";
 resultado.style.color="white";
 resultado.style.textAlign = "center";
 resultado.style.fontSize ="2rem";

resultado.innerHTML = `<p> O aluno ${aluno.nome} mora em ${aluno.endereco.bairro} na rua ${aluno.endereco.rua} e numero ${aluno.endereco.numero} e tem o telefone ${aluno.listaTelefone[1]}</p>`

console.log(aluno)

console.log(aluno.nome);
console.log(aluno.listaTelefone[0]);
console.log(aluno.endereco.bairro);

