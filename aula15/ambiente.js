let num = [5, 8, 2, 9, 3]
num.push(1) // adiciona o valor na ultima posição do vetor

console.log(`O vetor é ${num}`)
console.log(`Ele tem ${num.length} posições.`)
console.log(`O primeiro elemento do vetor é ${num[0]}`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

let i = num.indexOf(4)
console.log(`Se o valor não existir no vetor, ele retorna o valor ${i}`)

if (i == -1) {
  console.log(`Em qual posição está o número 4?`)
  console.log(`O valor não foi encontrado!`)
} else {
  console.log(`O valor está na posição ${i}`)
}

num.sort()
console.log(`O vetor em ordem crescente fica ${num}`)
