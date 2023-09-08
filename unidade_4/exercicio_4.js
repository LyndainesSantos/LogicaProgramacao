//Faça uma função que receba 3 números inteiros como parâmetro, representando horas, minutos e segundos, e os converta em segundos
const prompt = require('prompt-sync')()

function converte_segundos(h,m,s){
    return h*60*60 + m*60 + s;
}

let hora = Number(prompt("Digite a hora: "));
let minuto = Number(prompt("Digite os minutos: "));
let segundo = Number(prompt("Digite os segundos: "));

console.log(`O total de segundos é ${converte_segundos(hora,minuto,segundo)}`)