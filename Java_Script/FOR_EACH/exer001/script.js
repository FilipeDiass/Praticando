//Dizer se o número é par ou ímpar utilizando o forEach:
const numeros = [0,1,2,3,4,5];

parImpar = (item) => {
    if(item % 2 == 0){
        console.log(`${item} é par`)
    }else{
        console.log(`${item} é ímpar`)
    }
}
numeros.forEach(parImpar)

// Colocar todos as strings em maiúscula utilizando forEach:
const nomes = ['joão', 'filipe', 'dias']

imNome = (item, indice) =>{
    nomes[indice] = nomes[indice].toUpperCase()
}
nomes.forEach(imNome)
console.log(nomes)

//Utlizando o forEach, retorne um array com os números dobrados
const array = [1, 2, 3]

dobro = (item, indice, array) => {
    array[indice] = item * 2
}

array.forEach(dobro)
console.log(array)