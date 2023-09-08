//Faça uma função e um programa de teste para o cálculo do volume de uma esfera. Sendo que o raio e passado por parâmetro
// V = 4/3 * pi * R^3
const prompt = require('prompt-sync')()

function volume_esfera(r){
    return  (4/3)*3.1416*r*r*r;
}

let raio = prompt("Digite o raio da esfera: ");
console.log(`O volume é igual a ${volume_esfera(raio)} m3`)