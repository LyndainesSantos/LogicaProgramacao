// Faça um programa que mostre a seguinte saída: (Utilize o método substr())
// I
// If
// Ifp
// Ifpi
// Ifp
// If
// I

let n = "Ifpi"

for(let i=0; i<n.length; i++){
    console.log(n.substring(0,i+1))
}

for(let i=n.length-1;i>=0; i--){
    console.log(n.substring(0,i))
}

