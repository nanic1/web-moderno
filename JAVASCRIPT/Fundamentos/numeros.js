const peso1 = 1.0
const peso2 = Number(2.0)

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const ava1 = 9.871
const ava2 = 6.871

console.log(ava1, ava2)

const total = ava1 * peso1 + ava2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // filtrar quantas casas decimas desejadas para aparecer no resultado (no caso foi optado somente por 2)
console.log(media.toString(2)) // binario
console.log(typeof media)
