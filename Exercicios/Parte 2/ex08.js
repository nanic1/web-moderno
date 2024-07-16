function multiplicador(a, b) {
    if (a < 0 || b < 0) {
        console.log("Não foi possivel realizar a multiplicação")
    } else {
    let resultado = 0
    for(let i = 0; i < Math.abs(b); i++) { 
        resultado += a
    }
    console.log(resultado)
    }
}

multiplicador(-1, 5)