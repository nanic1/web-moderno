function desempenho(x) {
    let pontosArray = x.split(" ").map(Number)

    let recordeMax = pontosArray[0]
    let recordeMin = pontosArray[0]
    let quebrouRec = 0
    let piorJogo = 1

    for (let i = 1; i < pontosArray.length; i++) {
        if (pontosArray[i] > recordeMax) {
            recordeMax = pontosArray[i];
            quebrouRec++;
        } else if (pontosArray[i] < recordeMin) {
            recordeMin = pontosArray[i];
            piorJogo = i + 1;
        }
    }

    return[quebrouRec, piorJogo]
}


let x = "10 20 20 8 25 3 0 30 1"
let resultado = desempenho(x)
console.log(resultado)