let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)

for (let i = 0; i < valores.length; i++) {
  console.log(`O índice ${i} tem o valor ${valores[i]}`)
}

console.log(`------------------------------------------`)
// Maneira simplificada

for (let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
