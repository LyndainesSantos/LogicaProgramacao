// Construa um programa que solicite uma frase escrita pelo usuário. Peça ao usuário para escolher uma palavra da 
// frase escrita e substituí-la por outra palavra. (Utilize o método replace())

const prompt = require('prompt-sync')()

let text = prompt("Digite um texto: ")
let excerpt = prompt("Digite a palavra a ser subsituída:")
let to_replace = prompt("Digite a nova palavra: ")

console.log(text.replace(excerpt, to_replace))