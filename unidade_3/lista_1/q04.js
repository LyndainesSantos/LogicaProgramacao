// Elabore um algoritmo que leia a nota de 80 alunos e que imprima ao final a nota de cada aluno e a média da turma

const prompt = require('prompt-sync')()

let nota = []
let soma = 0

for (let i = 0; i< 5; i++){
    nota[i] = parseFloat(prompt("Digite a nota do aluno "+ (i+1)+": "))
}

for(let j = 0; j<nota.length; j ++){
    console.log("O aluno "+j+" tem nota: " + nota[j])
    soma += nota[j]
}

let media = soma / nota.length
console.log(" A média da turma é " + media)