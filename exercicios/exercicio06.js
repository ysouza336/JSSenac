'use strict';
const resultado = document.getElementById('resultado');
Object.assign(resultado.style, {
  fontSize: '1.5rem',
  color: 'white',
  backgroundColor: 'blue',
  padding:'10px',
  borderRadius: '5px',
  textAlign: 'center',
});

let cliente = [
    {
        id:1,
        nome:"Dio"
    },
    {
        id:2,
        nome:"Ozzy"
    },
    {
        id:3,
        nome:"Ian"
    }
]


for (const clientes of cliente) {
  console.log('Cliente: ' + clientes.nome + ', - ID: ' + clientes.id);
  resultado.innerHTML += `<p>Cliente: ${clientes.nome}, - ID: ${clientes.id}</p>`;
}