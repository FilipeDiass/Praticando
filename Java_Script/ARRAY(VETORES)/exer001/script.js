var button = document.querySelector('#button-inp')
button.addEventListener('click', function clique(){
    let num1 = document.querySelector('#input1').value
    let num2 = document.querySelector('#input2').value
    let num3 = document.querySelector('#input3').value
    let num4 = document.querySelector('#input4').value
    let res = document.querySelector('#res')

    res.innerHTML = `Ordem Crescente:<br>`

    if(!num1 || !num2 || !num3 || !num4){
        alert('Por-favor, preencha todos os campos')
    }else{
        
        num1 = Number(num1)
        num2 = Number(num2)
        num3 = Number(num3)
        num4 = Number(num4)

        let numeros = [num1, num2, num3, num4]
        let aux = 0
        let pos = 0

        //Número maior
        for(pos; pos <= numeros.length; pos++){
            if(numeros[0] <= numeros[pos]){
                aux = numeros[pos]
                numeros[pos] = numeros[0]
                numeros[0] = aux
            }
        }

        //Segundo maior
        for(pos = 1; pos <= numeros.length; pos++){
            if(numeros[1] <= numeros[pos]){
                aux = numeros[pos]
                numeros[pos] = numeros[1]
                numeros[1] = aux
            }
        }

        //Terceiro maior
        for(pos = 2; pos <= numeros.length; pos++){
            if(numeros[2] <= numeros[pos]){
                aux = numeros[pos]
                numeros[pos] = numeros[2]
                numeros[2] = aux
            }
        }  
        
        res.innerHTML += `${numeros[3]} - ${numeros[2]} - ${numeros[1]} - ${numeros[0]}`
    }

})