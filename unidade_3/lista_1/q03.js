// Elabore um algoritmo que armazene o nome e duas notas de 5 alunos e imprima uma listagem contendo nome, as duas notas e a média de cada aluno.

const prompt = require('prompt-sync')()

let nome_nota_media = []
let numero_alunos = 5

for (let i = 0; i < numero_alunos*4; i = i + 4) {
    nome_nota_media[i] = prompt("Digite o nome: " )
    nome_nota_media[i+1] = parseFloat(prompt("Digite a nota 1: "))
    nome_nota_media[i+2] = parseFloat(prompt("Digite a nota 2: "))
    nome_nota_media[i+3] = (nome_nota_media[i+1] + nome_nota_media[i+2])/2
}

console.log(nome_nota_media)

for (let j = 0; j < nome_nota_media.length; j = j + 4) {
    console.log("O aluno " + nome_nota_media[j] + " tem notas: " + nome_nota_media[j+1] + " e " + nome_nota_media[j+2] + " e média " + 
    nome_nota_media[j+3])
}