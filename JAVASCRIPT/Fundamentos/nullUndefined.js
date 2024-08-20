let valor
console.log(valor)

valor = null
console.log(valor)

const prod1 = {}
console.log(prod1.preco)
console.log(prod1)

prod1.preco = 3.50;
console.log(prod1)

prod1.preco = undefined
console.log(!!prod1.preco)
delete prod1.preco
console.log(prod1)

prod1.preco = null
console.log(prod1)