function repetirElemento(elemento, vezes) {
    if (vezes <= 0) {
        console.log([])
    } else {
        let resultado = []

        for (let i = 0; i < vezes; i++) {
            resultado.push(elemento)
        }
        console.log(resultado)
    }
}

repetirElemento('a', 5)
repetirElemento('hello', 0)