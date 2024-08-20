function jurosSimples(CI, taxaJuros, tempo) {
    const m1 = CI * (1 + taxaJuros/100 * tempo)
    console.log('R$' + m1.toFixed(2))
}

function jurosCompostos(CI, taxaJuros, tempo) {
    const m2 = CI * (1 + taxaJuros/100) ** tempo
    console.log('R$' + m2.toFixed(2))
}

jurosSimples(1000, 5, 3)
jurosCompostos(1000, 5, 3)