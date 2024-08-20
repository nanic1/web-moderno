function maiorOuIgual(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} é > que ${num2}`)
    } else if (num1 < num2) {
        console.log(`${num1} é < que ${num2}`)
    } else if (num1 == num2) {
        console.log(`${num1} é = a ${num2}`)
    } else {
        console.log("Erro, numero invalido")
    }
}

maiorOuIgual(0, 0)
maiorOuIgual(5, 1)
maiorOuIgual(3, 5)