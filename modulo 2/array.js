const valor = [7.7, 8.9, 6.3, 9.2]
console.log(valor[0], valor[3])
console.log(valor[4])

valor[4] = 10

console.log(valor)
console.log(valor.length)

valor.push({id: 3}, false, null, 'teste')
console.log(valor)

valor.pop()
console.log(valor)

delete valor[0]
console.log(valor)

console.log(typeof valor)