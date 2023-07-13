//Escreva uma função que recebe um array de números e use o forEach para calcular a soma de todos os elementos do array.
const array = [45, 8, 75, 4]
let total = 0

soma = (item) =>{
    total += item
}
array.forEach(soma)
console.log(total)

//Crie uma função que recebe um array de strings e use o forEach para imprimir cada elemento do array no console.
const array2 = ['Filipe', 'Israel', 'joão', 'Herlene']

nome = (item,indice) => {
    console.log(array2[indice])
}
array2.forEach(nome)

//Escreva uma função que recebe um array de números e use o forEach para filtrar apenas os números pares e retorná-los em um novo array.
const array3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const aux = []
par = (item, indice) => {
    if(array3[indice] % 2 == 0){
        aux.push(item)
    }
}
array3.forEach(par)
console.log(aux)

//Crie uma função que recebe um array de números e use o forEach para calcular a média dos elementos.
const array4 = [45, 85, 10, 78]
let total2 = 0
let m = 0

media = (item, indice) => {
    total2 += item
    m = total2 / array4.length
}
array4.forEach(media)
console.log(m)

//Escreva uma função que recebe um array de strings e usa o forEach para remover elementos repetidos, deixando apenas uma ocorrência de cada elemento.
const array5 = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'orange']
let aux2 = []

remove = (item, indice) => {
  if(!aux2.includes(item)){
    aux2.push(item)
  }
}
array5.forEach(remove)
console.log(aux2)

//Crie uma função que recebe um array de palavras e usa o forEach para contar a quantidade de caracteres em cada palavra, exibindo o resultado no console.
const array6 = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'orange']

contar = (item, indice) => {
    console.log(`Índice ${indice}: ${item.length}`)
}
array6.forEach(contar)