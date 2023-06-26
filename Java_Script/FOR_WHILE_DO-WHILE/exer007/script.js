var button = document.querySelector('#button-inp')
button.addEventListener('click', function clique(){
    let num1 = document.querySelector('#input1').value
    let num2 = document.querySelector('#input2').value
    let res = document.querySelector('#res')

    if(!num1 || !num2){
        alert('[ERROR] Verifique se todos os campos estão preenchidos.')
    }else{
        let meio = parseInt(1)
        num1 = parseInt(num1)
        num2 = parseInt(num2)
        res.innerHTML = `Números entre o números 1 e número 2:<br>`

        if(num1 < num2){
            meio += num1
            for(meio; meio < num2; meio++){
                res.innerHTML += `${meio}  ` 	
            }
        }else if(num1 == num2){
            alert('[ERROR] Os números são iguais, por-favor coloque números diferentes.')
        }else{
            meio += num2
            for(meio; meio < num1; meio++){
                res.innerHTML += `${meio}  ` 	
            }
        }
            
    }
})