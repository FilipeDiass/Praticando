let button = document.querySelector('#button-inp')
button.addEventListener('click', function resultado(){
    let input = document.querySelector('#input1').value
    let res = document.querySelector('#res')

    if(!input){
        alert('Por-favor, preencha o campo abaixo.')
    }else{
        let num = Number(input)
        if(num != Math.round(num)){
            alert('Insira somente números inteiros. \n(números com virgula não podem ser inseridos)')
        }else if(num > 20 || num < 0){
            alert('Por-favor, insira um número menor que 20 e maior que 0.')
        }else{
            res.innerHTML = repeticao(num)
        }

    }

})

function repeticao(n){
    let repeti = ``
    for(let rep = 1; rep <= n; rep ++){
        repeti += `<br>`
        for(let repNum = 1; repNum <= rep; repNum++){
           repeti += `${repNum}`
        }
    }
    return repeti
}