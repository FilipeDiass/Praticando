var button = document.querySelector('#button-inp')
button.addEventListener('click', clique)

function clique(){

    var imp1 = document.querySelector('#input1')
    var imp2 = document.querySelector('#input2')
    var imp3 = document.querySelector('#input3')
    var res = document.querySelector('#res')

    var n1 = Number(imp1.value)
    var n2 = Number(imp2.value)
    var n3 = Number(imp3.value)

    if(n1 > n2 && n1 > n3){
        var maior = n1
    }else if(n2 > n3){
        var maior = n2
    }else{
        var maior = n3
    }

    if(n1 < n2 && n1 < n3){
        var menor = n1
    }else if(n2 < n3){
        var menor = n2
    }else{
        var menor = n3
    }

    if(maior == menor){
        res.innerHTML = `O número maior e o menor são iguais`
    }else{
        res.innerHTML =`O maior número é ${maior}`
        res.innerHTML +=`<p>O menor número é ${menor}</p>`
    }





    










}