// Escreva um programa que dado um valor numérico digitado pelo usuário (armazenado em uma variável inteira), imprima cada um dos seus dígitos por extenso.
// Exemplo: Entre o número: 4571
// Resultado: quatro, cinco, sete, um

const prompt = require('prompt-sync')()

const dicionario = {
    0: 'zero',
    1: 'um',
    2: 'dois',
    3: 'três',
    4: 'quatro',
    5: 'cinco',
    6: 'seis',
    7: 'sete',
    8: 'oito',
    9: 'nove'
  }

let numero = prompt("Digite um número: ")
let n2string = numero.toString()
let result=[]

for (let i=0; i < n2string.length; i++){
    result[i] = dicionario[Number(n2string.charAt(i))]
}

console.log("O resultado por extenso é:",result.join(","))


