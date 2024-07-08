function estaEntre(num, min, max) {
    if (min <= num && num <= max) {
        console.log(`${num} está entre ${min} e ${max}`)
    } else{
        console.log(`${num} não está entre ${min} e ${max}`)
    }
}

estaEntre(10, 50, 100)
estaEntre(10, 100, 100)
estaEntre(3, 3, 150)
estaEntre(10, 1, 100)