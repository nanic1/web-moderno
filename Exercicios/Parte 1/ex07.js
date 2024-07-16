function bhaskara(ax2, bx, c) {
    const delta = (bx ** 2) - (4*ax2*c)
    if (delta < 0) {
        console.log('Delta é negativo')
    } else {
        const x1 = (-bx + Math.sqrt(delta)) / (2*ax2)
        const x2 = (-bx - Math.sqrt(delta)) / (2*ax2)

        console.log(x1, x2)
    }
}

bhaskara(-3, 5, 8)