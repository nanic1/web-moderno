function Carro(max = 200, delta = 5) { 
    let atual = 0

    this.acelerar = function () {
        if(atual + delta <= max) {
            atual += delta
        } else {
            atual = max
        }
    }
    this.getAtual = function() {
        return atual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getAtual())