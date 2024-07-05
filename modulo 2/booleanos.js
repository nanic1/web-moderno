let ativo = false
console.log(ativo)

ativo = true
console.log(ativo)

ativo = 1
console.log(!!ativo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(ativo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(ativo = false))

console.log("finalizando")
console.log(!!('' || null || 0 || ' '))

let nome = 'Pedro'
console.log(nome || 'Desconhecido')