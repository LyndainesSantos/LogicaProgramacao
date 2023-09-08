//Faça uma função que receba a data atual (dia, mês e ano em inteiro) e exiba-a na tela no formato textual por extenso. 
//Exemplo: Data: 01/01/2000, Imprimir: 1 de janeiro de 2000.
const prompt = require('prompt-sync')()
function extenso(dia, mes, ano) {
    let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", 
                "setembro", "outubro", "novembro", "dezembro"];
    
    if (mes < 1 || mes > 12 || dia < 1 || dia > 31) {
      return "A data  não é válida";
    }
      
    const mesPorExtenso = meses[mes - 1];

    return `${dia} de ${mesPorExtenso} de ${ano}`;
}

//let data = '08/09/2023';
let data = prompt("Informe a data no formato DD/MM/AAAA: ")
data_split = data.split("/")
d = Number(data_split[0]);
m = Number(data_split[1]);
a = Number(data_split[2]);

console.log(extenso(d,m,a))