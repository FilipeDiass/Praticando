let button = document.querySelector('#button-inp')
button.addEventListener('click', function resultado(){
    let input1 = document.querySelector('#input1').value
    let input2 = document.querySelector('#input2').value
    let res = document.querySelector('#res')

    if(!input1 || !input2){
        alert('Por-favor, preencha todos os campos abaixo')
    }else{
        num1 = Number(input1)
        num2 = Number(input2)
        res.innerHTML = somaImposto(num1, num2)
    }
})

function somaImposto(imposto, custo){
    return custo + custo / 100 * imposto
}