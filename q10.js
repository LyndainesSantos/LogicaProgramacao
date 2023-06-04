// Fazer um programa para contar quantos espaços em branco existem em uma frase fornecida pelo usuário.

const prompt = require('prompt-sync')()

let text = prompt("Digite um texto:").toString()

let palavras = text.split(" ")

console.log("O total de espaços em branco é", palavras.length - 1)