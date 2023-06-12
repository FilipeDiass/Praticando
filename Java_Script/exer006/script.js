var button = document.querySelector('#button-inp')
button.addEventListener('click', clique)

function clique(){
    var maior = Number(document.querySelector('#input1').value)
    var meio = Number(document.querySelector('#input2').value)
    var menor = Number(document.querySelector('#input3').value)
    var aux = maior
    var res = document.querySelector('#res')

    if(meio > maior){
        aux = meio
        meio = maior
        maior = aux
    }
    if(menor > maior){
        aux = menor 
        menor = maior
        maior = aux
    }
    if(menor > meio){
        aux = menor
        menor = meio
        meio = aux
    }

    res.innerHTML = `Ordem decrescente: ${maior}, ${meio} e ${menor}`

   


}
