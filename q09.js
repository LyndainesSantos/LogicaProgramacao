// Elabore um programa para obter o nome de uma pessoa e a seguir forneça o sobrenome do nome informado. 
// Por exemplo para o nome: Omero Francisco Bertol, o programa deverá fornecer como resultado: Bertol

const prompt = require('prompt-sync')()

let text = prompt("Digite seu nome completo:").toString()
// let text = "lynda santos"

let palavras = text.split(" ")
let palavrasFiltradas = palavras.filter(palavra => palavra !== "")

console.log("O último sobrenome é", palavrasFiltradas[palavrasFiltradas.length - 1])