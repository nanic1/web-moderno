function fruta (x) {
    switch (x) {
        case 'maça':
            console.log('Não vendemos esta fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo.')
            break
        default:
            console.log('Erro no sistema')
            break
    }
}

fruta('maça')
fruta('melancia')
fruta('kiwi')
fruta('banana')