
var button = document.querySelector('#button-inp')
button.addEventListener('click', clicar)

function clicar(){

    var inp1 = document.querySelector('#input1')
    var inp2 = document.querySelector('#input2')
    var inp3 = document.querySelector('#input3')
    var res = document.querySelector('#res')

    var n1 = Number(inp1.value);
    var n2 = Number(inp2.value);
    var n3 = Number(inp3.value);

    
    if(n1 >= n2 && n1 >= n3){
        var maior = n1
    }else if(n2 > n1 && n2 > n3){
        var maior = n2
    }else{
       var maior = n3
    }
    
    if(maior == n1 && maior == n2 && maior == n3){
        res.innerHTML = `Os números 1,2 e 3 são iguais!<br><strong>o maior é: ${maior}</strong>`
    }else if(maior == n1 && maior == n2){
        res.innerHTML = `Os números 1 e 2 são iguais!<br><strong>O maior é: ${maior}</strong>`
    }else if(maior == n2 && maior == n3){
        res.innerHTML = `Os números 2 e 3 são iguais!<br><strong>o maior é: ${maior}</strong>`
    }else if(maior == n3 && maior == n1){
        res.innerHTML = `Os números 1 e 3 são iguais!<br><strong>o maior é: ${maior}</strong>`    }else{
        res.innerHTML = `<strong>O maior número é: ${maior}</strong>`
    }








    
}