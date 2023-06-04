// Faça um programa que converta os valores do tipo inteiro, para uma única String. Depois, substitua os valores referentes para a letra 
// correspondente e mostre a palavra gerada. (Utilize o método replace())
// Substituir: 1 = a, 3 = c, 4 = d, 12 = m, 14 = o, 15 = p, 17 = r, 19 = t, 20 = u
// Código da palavra: 3 – 14  – 12  – 15  – 20 - 19 – 1 – 4 – 14 –17

const dicionario = {
    1: 'a',
    3: 'c',
    4: 'd',
    12: 'm',
    14: 'o',
    15: 'p',
    17: 'r',
    19: 't',
    20: 'u'
  }
  
  // Código da palavra
  const codigo = [3, 14, 12, 15, 20, 19, 1, 4, 14, 17]

let palavra = codigo.join('').toString()

for (let i=0; i<codigo.length; i++){
    palavra = palavra.replace(codigo[i], dicionario[codigo[i]])
}

console.log(palavra)
