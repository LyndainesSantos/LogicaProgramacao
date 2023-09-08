//Crie uma função que recebe um inteiro positivo e teste para saber se ele é primo ou não. 
//Faça um script que recebe um inteiro n e mostra todos os primos, de 1 até n.

const prompt = require('prompt-sync')()

function verifica_primo(n){
    let cont = 0;
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            cont ++
        }
    }
    return cont

}

function antecessores_primos(n){
    let lista=[]
    for(let i = 2; i < n; i++){
        r = verifica_primo(i)
        if(r == 0){
            lista.push(i)
        }
    }
    if(lista.length > 0){
        return `os seus antecessores primos são: ${lista}`
    }else{
        return `Não há antecessores primos desse número!`
    }
}

numero = Number(prompt("Digite um número: "))
resultado = verifica_primo(numero)
if (resultado != 0 || numero == 1){
    console.log(`O número ${numero} não é primo! E ${antecessores_primos(numero)}`)
}else{
    return console.log(`O número ${numero} é primo! E ${antecessores_primos(numero)}`)
}