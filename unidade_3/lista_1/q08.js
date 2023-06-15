// Dada uma coleção de N números, imprimir o índice do primeiro número negativo, se houver.

let vetor = [0,1,-2,3,4,5,-6,2,4,2]

function find_indice_negative(v) {
    
    for (let i = 0; i < v.length; i++) {
      if (v[i] < 0) {
        return i
      }
    }
}
  
  let result = find_indice_negative(vetor)

  if (result != undefined) {
    console.log("O primeiro número negativo está no índice: " + result)
  } else {
    console.log("Não há número negativo")
  }