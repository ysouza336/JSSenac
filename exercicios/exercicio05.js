'use strict';

const resultado = document.getElementById('resultado');
Object.assign(resultado.style, {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px',
  borderRadius: '5px'
});

const valorCompra = 200;
const desconto = valorCompra > 300 ? valorCompra * 0.2 : valorCompra > 100 ? valorCompra * 0.1 : 0;
const valorFinal = valorCompra - desconto;
const mensagem = desconto
  ? `Valor final: R$${valorFinal}\nDesconto aplicado de: ${(desconto / valorCompra) * 100}%\nDesconto de: R$${desconto}\nVocê economizou: R$${desconto}`
  : 'Compra abaixo de R$100 não há desconto';

console.log(mensagem);
resultado.innerText = mensagem;
