function produtos (x){
    switch(x){
        case 100:
            console.log('--------------------')
            console.log('Cachorro Quente')
            console.log('R$3,00')
            break
        case 200:
            console.log('--------------------')
            console.log('Hamburguer Simples')
            console.log('R$4,00')
            break
        case 300:
            console.log('--------------------')
            console.log('Cheeseburguer')
            console.log('R$5,50')
            break
        case 400:
            console.log('--------------------')
            console.log('Bauru')
            console.log('R$7,50')
            break
        case 500:
            console.log('--------------------')
            console.log('Refrigerante')
            console.log('R$3,50')
            break
        case 600:
            console.log('--------------------')
            console.log('Suco')
            console.log('R$2,80')
            break
        default:
            console.log('--------------------')
            console.log('Produto não existente')
            break
    }
}

produtos(100)
produtos(200)
produtos(600)
produtos(1)