function boletim(x, y, z){
    const nota1 = x*3
    const nota2 = y*3
    const nota3 = z*3
    const media = (nota1 + nota2 + nota3) / (3 + 3 + 4)

    console.log(`Nota 1: ${x}\nNota 2: ${y}\nNota 3: ${z}\nMedia: ${media}`)

    if (media >= 5 && media <= 10){
        console.log('APROVADO\n')
    } else if (media < 5 && media >= 0){
        console.log('REPROVADO\n')
    } else{
        console.log('ERRO\n')
    }
}

boletim(7, 7, 7)
boletim(4, 5, 3)
boletim(1, 1, 1)
boletim(10, 10, 10)