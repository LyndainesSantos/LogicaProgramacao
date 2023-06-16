// Dona Lesma é esportista e aventureira e definiu como objetivo deste verão alcançar o topo do muro do jardim em que vive. 
// A cada dia, valente e metodicamente ela sobe exatamente uma certa distância (sempre a mesma a cada dia). 
// Mas a cada noite enquanto dorme Dona Lesma escorrega para baixo uma outra distância (sempre a mesma a cada noite) ...
// Dadas a altura do muro, a distância que ela sobe a cada dia e a distância que ela desce a cada noite, ajude Dona Lesma a 
// calcular quantos dias ela levará para chegar ao topo do muro. altura = 10000 subida = 100 descida = 50

let h_muro = 10000
let dist_subida = 100
let dist_descida = 50

function calcular_tempo(altura, subida, descida) {
    let distancia = 0
    let dias = 0
    
    while (distancia < altura) {
      dias++
      distancia += subida
      
      if (distancia >= altura) {
        break
      }
      
      distancia -= descida
    }
    
    return dias
  }
  
  let dias_topo = calcular_tempo(h_muro, dist_subida, dist_descida)
  console.log("Faltam " + dias_topo + " dias para alcançar o topo")
  