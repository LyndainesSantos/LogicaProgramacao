// Implemente um algoritmo que leia as notas e os nomes de 5 alunos armazenando os dados em vetores de 5 posições, 
// sendo que as notas serão armazenadas em um vetor de reais e os nomes em um outro vetor do tipo cadeia de caracteres. 
// Ao final o algoritmo deve escrever na tela somente os nomes dos alunos que tiraram nota maior que 5.0.

const prompt = require('prompt-sync')()

let nome = []
let nota = []

for (let i = 0; i < 5; i++) {
    nome[i] = prompt("Digite o nome " + (i+1) + ":")
    nota[i] = parseFloat(prompt("Digite a nota "+ (i+1) + ":"))
}

for (let j = 0; j < nota.length; j++) {
    if(nota[j] > 5) {
        console.log(nome[j])
    }
}