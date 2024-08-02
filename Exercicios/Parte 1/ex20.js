function calcularNotas(valor) {
    const cedulas = [100, 50, 10, 5, 1];
    let resultado = '';

    for (const cedula of cedulas) {
        const quantidade = Math.floor(valor / cedula);
        if (quantidade > 0) {
            resultado += `${quantidade} nota(s) de R$ ${cedula}\n`;
            valor %= cedula;
        }
    }

    if (resultado) {
        console.log(resultado.trim());
    } else {
        console.log('Nenhuma nota necessária.');
    }
}


calcularNotas(1018);