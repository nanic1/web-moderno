function triangulo(l1, l2, l3) {
    if (l1 == l2 && l1 == l3 && l2 == l3) {
        console.log('Forma-se um triângulo equilátero!')
    } else if (l1 != l2 && l1 != l3 && l2 != l3) {
        console.log('Forma-se um triângulo escaleno!')
    } else {
        console.log('Forma-se um triângulo isósceles!')
    }
}

triangulo(3, 3, 3)
triangulo(9, 4, 4)
triangulo(5, 6, 7)