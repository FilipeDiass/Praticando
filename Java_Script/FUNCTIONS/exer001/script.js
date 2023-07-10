let grau = document.getElementsByName('graus')
let res = document.querySelector('#res')
let button = document.querySelector('#button-inp')
let ngrau = document.querySelector('#ngrau')
let input = document.querySelector('#input1')
let label = document.querySelector('#label')

function cel(grau){
    let calc = grau * 1.8 + 32
    return calc
}

function far(grau){
    let calc = (grau - 32) / 1.8
    return calc
}

grau[0].addEventListener('click', function selectCel(){
    ngrau.style.display = 'block';
    label.innerHTML = 'Insira um valor em graus Celsius:'
})
grau[1].addEventListener('click', function selectFar(){
    ngrau.style.display = 'block';
    label.innerHTML = 'Insira um valor em graus Farenheit:'
})


button.addEventListener('click', function resultado(){
    if(grau[0].checked == grau[1].checked){
        alert('Marque uma das opções, "Celsius" ou "Farenheit".')
    }else if(input.value.length == 0){
        alert('[ERROR] Insira um valor no campo abaixo.')
    }else{
        num = Number(input.value)

        if(grau[0].checked){
            let resul = cel(num)
            res.innerHTML = `Celsius para Farenheit:<br>${resul.toFixed(1)}`
        }else if(grau[1].checked){
            let resul = far(num)
            res.innerHTML = `Farenheit para Celsius:<br>${resul.toFixed(1)}`
        }
      
    }

})