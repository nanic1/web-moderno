function plano (idade) {
    if (idade < 10 && idade > 0){
        console.log('Plano Infantil: R$180,00')
    } else if (idade >= 10 && idade <= 30){
        console.log('Plano Normal: R$150,00')
    } else if (idade > 30 && idade <= 60){
        console.log('Plano Adulto: R$195,00')
    } else if (idade > 60 && idade < 102){
        console.log('Plano Senior: R$230,00')
    }
}

plano(15)
plano(5)
plano(20)
plano(55)
plano(70)
plano(-5)