// Crie uma função que recebe como parâmetro um número inteiro e devolve o seu dobro

const prompt = require('prompt-sync')()

function calcular_dobro(numero) {
    return numero * 2;
  }

let numero = prompt("Digite um número: ");
console.log(`O dobro de ${numero} é ${calcular_dobro(numero)}`);