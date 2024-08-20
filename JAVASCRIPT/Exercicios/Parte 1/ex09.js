function boletim(nota) {
    if (nota < 40) {
        console.log('Reprovado')
    } else if (nota >= 40 && nota < 70) {
        console.log('Recuperação')
    } else {
        console.log('Aprovado')
    }
}

boletim(10)
boletim(65)
boletim(100)
boletim(70)
boletim(39)