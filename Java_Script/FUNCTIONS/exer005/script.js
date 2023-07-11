let button = document.querySelector('#button-inp')
button.addEventListener('click', function resultado(){
    let input = document.querySelector('#input1').value
    let res = document.querySelector('#res')
    if(!input){
        alert('[ERROR] Por-favor, insira um número no campo abaixo.')
    }else{
        let num = Number(input)
        res.innerHTML = NeP(num)
    }
})

function NeP(n){
    if(n < 0){
        return 'NEGATIVO'
    }else if(n == 0){
        return 'NEUTRO'
    }else{
        return 'POSITIVO'
    }
}