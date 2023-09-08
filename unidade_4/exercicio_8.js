//Faça um programa que converta da notação de 24 horas para a notação de 12 horas. Por exemplo, o programa 
//deve converter 14:25 em 2:25 P.M. A entrada é dada em dois inteiros. Deve haver pelo menos duas funções: uma 
//para fazer a conversão e uma para a saída. Registre a informação A.M./P.M. como um valor ‘A’ para A.M. e ‘P’ 
//para P.M. Assim, a função para efetuar as conversões terá um parâmetro formal para registrar se é A.M. ou P.M. 
//Inclua um loop que permita que o usuário repita esse cálculo para novos valores de entrada todas as vezes que desejar.

const prompt = require('prompt-sync')()

function converterPara12Horas(horas, minutos) {
    let periodo = 'A.M.'
    if (horas >= 12) {
      periodo = 'P.M.'
      if (horas > 12) {
        horas -= 12
      }
    }
    return `${horas}:${minutos} ${periodo}`
  }
  
  function main() {
    let continuar = true
    while (continuar) {
      const horas24 = Number(prompt('Digite a hora (0-23):'))
      const minutos = Number(prompt('Digite os minutos (0-59):'))
  
      if (isNaN(horas24) || isNaN(minutos) || horas24 < 0 || horas24 > 23 || minutos < 0 || minutos > 59) {
        console.log('Entrada inválida. Certifique-se de digitar horas e minutos válidos.')
      } else {
        const resultado = converterPara12Horas(horas24, minutos)
        console.log(`O horário convertido é: ${resultado}`)
      }
  
      const continuarInput = prompt('Deseja continuar? S ou s para Sim, qualquer outra tecla para sair ').toLowerCase()
      continuar = continuarInput === 's'
    }
  }
  
  main()
  