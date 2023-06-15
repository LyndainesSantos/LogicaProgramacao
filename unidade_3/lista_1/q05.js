// Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
// Modifique os elementos do array de modo a sequência de números ficar do contrário. Ou seja, se 
// digitou: 1,2,3 Vai aparecer: 3,2,1

const prompt = require('prompt-sync')()

let numero = []

for(let i = 0; i < 3; i++){
    numero[i] = parseFloat(prompt("Digite um número: "))
}

console.log("A sequência digitada foi "+numero)
console.log("A sequência invertida é "+numero.reverse())