//A probabilidade de dar um valor em um dado é 1/6 (uma em 6). Faça um script em JavaScript que simule 
//1 milhão de lançamentos de dados e mostre a frequência que deu para cada número

function lancamento(){

    const freq = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
      }

    for (let i = 0; i < t_lancamento; i++) {
        const resultadoLancamento = Math.floor(Math.random() * 6) + 1
        freq[resultadoLancamento]++
      }
      for (let n = 1; n <= 6; n++) {
        const frequencia = freq[n];
        const probabilidade = (frequencia / t_lancamento)*100;
        console.log(`Número ${n}: Frequência ${frequencia}. Probabilidade ${probabilidade.toFixed(3)}%`);
      }
      
}

t_lancamento = 1000000

lancamento()