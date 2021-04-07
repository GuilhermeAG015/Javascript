let n2 = [
        { "nome": "joao", "nota": 5 }, { "nome": "maria", "nota": 7 },
        { "nome": "jose", "nota": 3.5 }, { "nome": "mateus", "nota": 9 },
        { "nome": "joana", "nota": 10 }, { "nome": "tiago", "nota": 8 },
        { "nome": "giovana", "nota": 4 }, { "nome": "renata", "nota": 2 },
        { "nome": "mariana", "nota": 6 }, { "nome": "jessica", "nota": 6.5 },
    ]

console.log(n2)
    
let alunosNotasAcimaDe7 = n2.filter(e => e.nota >= 7)

console.log(alunosNotasAcimaDe7)

let umPontoNaNota = n2.map(e => e.nota < 10 ? e.nota = e.nota + 1 : e = e)

console.log(n2)

let totalForEach2 = 0

n2.forEach(element => { 
    totalForEach2 += element.nota
    console.log(totalForEach2)
})

console.log(totalForEach2)

let valorInicial = 0

let totalReduce2 = n2.reduce(function (totalReduce2, e) {
    return totalReduce2 + e.nota
}, valorInicial) 

console.log(totalReduce2)