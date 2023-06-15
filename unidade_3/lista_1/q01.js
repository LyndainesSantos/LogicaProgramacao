// Implemente um algoritmo que leia as notas de 10 alunos armazenando as em um vetor de 10 posições 
// Ao final escreva na tela somente as notas maiores que 5.0.

const prompt = require('prompt-sync')()

let notas_maior_5 = []
let j = 0
for (let i = 0; i < 10; i++){
    let nota = parseFloat(prompt("Digite a nota: "))
    if(nota > 5){
        notas_maior_5[j] = nota
        j++
    }
}
if((notas_maior_5) != 0){
    console.log("Estas são as notas maiores que 5 (cinco): ", notas_maior_5)
}else{
    console.log("Nenhuma das notas digitadas é maior que 5!")
}