// Faça um programa que leia um número inteiro e informe se ele é perfeito ou não. Um número perfeito é aquele que é igual à 
// soma de seus divisores. Ex.: 6 = 1 + 2 + 3 = número perfeito

const prompt = require('prompt-sync')()

function numero_perfeito(numero) {
    let soma_divisores = 0
  
    for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
        soma_divisores += i
      }
    }
  
    if (soma_divisores === numero) {
      return true
    } else {
      return false
    }
  }
  
let numero = parseInt(prompt("Digite um número inteiro:"))
  
let result = numero_perfeito(numero)
  
if (result) {
    console.log("O número " + numero + " é um número perfeito")
} else {
    console.log("O número " + numero + " não é um número perfeito")
}
  