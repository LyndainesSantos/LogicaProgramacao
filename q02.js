// Faça um programa em JavaScript que mostre a seguinte saída (use o método charAt)
// I
// If
// Ifp
// Ifpi
// Ifp
// If
// I

let n = "Ifpi"

let word = []
for(let i=0; i<n.length; i++){
    
    if(i!=0){        
        console.log(word[i] = word[i-1]+n.charAt(i))
    }else{
        console.log(word[i] = n.charAt(i))
    }  
}

for(let i=word.length-1;i>0; i--){
    console.log(word[i-1])
}

