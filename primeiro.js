let n1 = [5, 7, 3.5, 9, 10, 8, 4, 2, 6, 6.5, 5.5]
console.log(n1)

let notasAcimaDe7 = n1.filter(e => e > 7);

console.log(notasAcimaDe7)

let umPontoAMais = n1.map(e => e < 10 ? e + 1 : e = e)

n1 = umPontoAMais

console.log(umPontoAMais)

let totalForEach = 0

n1.forEach(element => { 
    totalForEach += element
    console.log(totalForEach)
})

console.log(totalForEach)

let totalReduce = 0

console.log(n1.reduce((totalReduce, e) => totalReduce + e))