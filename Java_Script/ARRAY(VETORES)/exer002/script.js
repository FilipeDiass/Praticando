function bubbleSort(array){
    let tam = array.length
    let aux = 0

    for(let pos = 0; pos <= tam; pos++){
        if(array[pos] <= array[pos + 1]){
            aux = array[pos + 1]
            array[pos + 1] = array[pos]
            array[pos] = aux
        }
    }
    return array
}

var button = document.querySelector('#button-inp')
button.addEventListener('click', function clique(){
    let num1 = document.querySelector('#input1').value
    let num2 = document.querySelector('#input2').value
    let num3 = document.querySelector('#input3').value
    let num4 = document.querySelector('#input4').value
    let res = document.querySelector('#res')

    res.innerHTML =`Ordem crescente:<br>`

    if(!num1 || !num2 || !num3 || !num4){
        alert('Por-favor, preencha todos os campos')
    }else{
        num1 = Number(num1)
        num2 = Number(num2)
        num3 = Number(num3)
        num4 = Number(num4)

        let array1 = [num1,num2,num3,num4]
        let resul = bubbleSort(array1)

        res.innerHTML += `${resul} `
    }



})