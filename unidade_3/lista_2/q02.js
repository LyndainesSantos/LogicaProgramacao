// Faça um programa que solicite um número inteiro de até 4 dígitos ao usuário e inverta a ordem de seus algarismos. 
// Ex.: Entrada = 5382 - Saída = 2835

const prompt = require('prompt-sync')()

function invert(numero) {
    let numeroString = numero.toString()
    let numero_invertido = numeroString.split("").reverse().join("")
    
    return parseInt(numero_invertido)
  }
  
let numero = prompt("Digite um número inteiro de até 4 dígitos:")

if(numero.length < 5){
    let result = invert(parseInt(numero))
    console.log("O número invertido é " + result)
}else{
    console.log("O número digitado possui mais de 4 dígitos. Digite até quatro dígitos")
} 