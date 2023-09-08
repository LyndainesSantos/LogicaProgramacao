//Determinar se eles lados formam um triangulo. Determinar e mostrar o tipo de triangulo, caso as medidas formem um triangulo.
const prompt = require('prompt-sync')()

function verificar_triangulo(l1,l2,l3){
    if (l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2){
        return `É um triângulo! E o Triângulo é ${tipo_triangulo(l1,l2,l3)}`
    }else{
        return "As medidas não formam um triângulo!"
    }
}

function tipo_triangulo(l1,l2,l3){
    if (l1 == l2 && l2 == l3){
        return "Equilátero"
    }else{
        if (l1 == l2 || l2 == l3 || l1 == l3){
            return "Isósceles"
        }else{
            return "Escaleno"
        }
    }
}

let lado_1 = Number(prompt("Digite o lado 1: "))
let lado_2= Number(prompt("Digite o lado 2: "))
let lado_3 = Number(prompt("Digite o lado 3: "))

console.log(`${verificar_triangulo(lado_1,lado_2,lado_3)}`)