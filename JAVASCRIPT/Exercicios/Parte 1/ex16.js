function calculadora (x, y, z) {
    switch(z) {
        case '+':
            console.log(`${x} + ${y} = ${x+y}`)
            break
        case '-':
            console.log(`${x} - ${y} = ${x-y}`)
            break
        case '*':
            console.log(`${x} * ${y} = ${x*y}`)
            break
        case '/':
            console.log(`${x} / ${y} = ${x/y}`)
            break
        default:
            console.log('Operador inválido!')
    }       
}

calculadora(1, 1, '+')
calculadora(10, 5, '-')
calculadora(5, 10, '*')
calculadora(10, 2, '/')
calculadora(1, 1, '&')