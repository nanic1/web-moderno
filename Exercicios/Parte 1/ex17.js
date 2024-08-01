function aumento(x, y) {
    switch(x) {
        case 'a':
            console.log(y + (y * 0.1))
            break
        case 'b':
            console.log(y + (y * 0.15))
            break
        case 'c':
            console.log(y + (y * 0.2))
            break
        default:
            console.log('Plano inválido')
            break
    }
}

aumento('a', 1000)
aumento('b', 1000)
aumento('c', 1000)
aumento('d', 1000)