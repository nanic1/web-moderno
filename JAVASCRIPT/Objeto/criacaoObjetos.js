function Produto(nome, preco, desc) {
    this.nome = nome
    this.PrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Banana', 10, 0.20)
const p2 = new Produto('Abacaxi', 12, 0.25)
console.log(p1.PrecoComDesconto(), p2.PrecoComDesconto())