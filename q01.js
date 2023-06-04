// Faça um programa que peça ao usuário para digitar um texto e informe quantos caracteres possui o texto informado pelo usuário.

const prompt = require('prompt-sync')()

let texto = prompt("Digite um texto: ")

console.log("O total de caracteres é", texto.length)