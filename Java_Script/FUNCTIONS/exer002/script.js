let button = document.querySelector('#button-inp')
button.addEventListener('click', function resultado(){
    let input1 = document.querySelector('#input1').value
    let input2 = document.querySelector('#input2').value
    let input3 = document.querySelector('#input3').value
    let res = document.querySelector('#res')

    if(!input1 || !input2 || !input3){
        alert('Preencha os 3 campos abaixo.')
    }else{
        let num1 = Number(input1)
        let num2 = Number(input2)
        let num3 = Number(input3)

        let resulSoma = soma(num1, num2, num3)
        let resulMedia = media(resulSoma)

        res.innerHTML = `A Soma dos três números é: ${resulSoma}<br>A média dos três números é: ${resulMedia.toFixed(1)}`
    }
})

function soma(num1, num2, num3){
    return num1 + num2 + num3
}

function media(soma){
    return soma / 3
}


