// Construa um programa em JavaScript que peça ao usuário para digitar um texto em letras maiúsculas e mostre o texto em letra minúscula, 
// em seguida solicite - o um texto em letra minúscula e mostre-o em letra maiúsculas. (Utilize os métodos toLowerCase() e toUpperCase())

const prompt = require('prompt-sync')()

let lower2Upper = prompt("Digite letras maíúsculas: ").toLocaleLowerCase()
console.log("Este é o texto em letras minúsculas: ", lower2Upper)
let upper2Lower = prompt("Digite letras minúsculas: ").toLocaleUpperCase()
console.log("Este é o texto em letras maiúsculas: ", upper2Lower)