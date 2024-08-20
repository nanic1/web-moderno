function calcularAnuidade(mes, valorAnuidade) {
    if (mes < 1 || mes > 12) {
        throw new Error('O mês deve estar entre 1 e 12');
    }

    const jurosMensais = 0.05;
    const mesesDeAtraso = mes - 1;

    const valorFinal = valorAnuidade * Math.pow((1 + jurosMensais), mesesDeAtraso);

    return valorFinal.toFixed(2);
}

const mes = 5; 
const valorAnuidade = 1000;

const valorAPagar = calcularAnuidade(mes, valorAnuidade);
console.log(`O valor a ser pago para o mês ${mes} é R$ ${valorAPagar}`);
