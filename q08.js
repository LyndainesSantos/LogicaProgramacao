// Faça um programa que, a partir de um texto digitado pelo usuário, conte o número de caracteres total e o número de palavras 
// (palavra é definida por qualquer sequência de caracteres delimitada por espaços em branco) e exiba o resultado.

const prompt = require('prompt-sync')()

let text = prompt("Digite um texto:").toString()
let tam_text = text.length

let palavras = text.split(" ")
let palavrasFiltradas = palavras.filter(palavra => palavra !== "")

console.log("O total de caracteres digitados é", tam_text)
console.log("O total de palavras digitadas é", palavrasFiltradas.length)