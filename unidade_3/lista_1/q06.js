// Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array.
// Depois, o usuário vai preenchendo elemento por elemento do vetor. Ao final, exiba o array e o array
// ao contrário (generalização do script anterior).

const prompt = require('prompt-sync')()

let numero = []

let vezes = prompt("Digite a quantidade de números a serem digitados: ")

for(let i = 0; i < vezes; i++){
    numero[i] = parseFloat(prompt("Digite um número: "))
}

console.log("A sequência digitada foi "+numero)
console.log("A sequência invertida é "+numero.reverse())