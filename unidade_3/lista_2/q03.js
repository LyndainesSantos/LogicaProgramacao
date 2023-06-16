// Escreva um programa para verificar se um número é palíndromo (Número que é igual ao seu reverso Ex.: 14541)

const prompt = require('prompt-sync')()

function palindromo(numero) {
    let numeroString = numero.toString()
    let numeroInvertido = numeroString.split("").reverse().join("")
    if (numeroString === numeroInvertido) {
      return true
    } else {
      return false
    }
  }
  
let numero = parseInt(prompt("Digite um número inteiro:"))
  
let resultado = palindromo(numero)
  
if (resultado) {
    console.log(numero + " é um número palíndromo.")
} else {
    console.log(numero + " não é um número palíndromo.")
}  