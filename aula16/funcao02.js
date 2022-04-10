function soma(n1, n2) {
  return n1 + n2
}

console.log(soma(2, 5))

// se não passar os parâmetros corretos ele retorna NaN
console.log(soma(2))

// Para evitar o NaN pode-se atribuir um parâmetro direto na função

function soma1(n1 = 0, n2 = 0) {
  return n1 + n2
}

// No caso vai somar o 5 com 0
console.log(soma1(5))
