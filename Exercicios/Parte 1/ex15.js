function carro (x) {
    switch (x) {
        case 'hatch':
            console.log('Compra efetuada com sucesso!')
            break
        case 'sedans':
            console.log('Tem certeza que não prefere este outro modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui.')
            break
    }
}

carro('hatch')
carro('sedans')
carro('volkswagen')