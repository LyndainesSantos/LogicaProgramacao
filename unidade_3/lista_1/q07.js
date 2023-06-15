// Crie uma função que recebe um vetor e um número. Ela deve mostrar todos os índices onde esse 
// número aparece no vetor, e não só apenas o primeiro e/ou último índice em que o número aparece.

let vetor = [0,1,2,3,4,5,6,2,4,2]
let numero = 2

function find_indices(v, n) {

    let indices = [];
    
    for (let i = 0; i < v.length; i++) {
      if (v[i] === n) {
        indices.push(i)
      }
    }
    
    return indices;
  }
  
  let result = find_indices(vetor, numero)
  console.log("O número " + numero + " está nos índices: " + result.join(", "))