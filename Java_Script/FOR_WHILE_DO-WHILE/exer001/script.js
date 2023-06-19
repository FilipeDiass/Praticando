var button = document.querySelector('#button-inp')
button.addEventListener('click', clique)

function clique(){
    let nota = document.querySelector('#input1')
    let res = document.querySelector('#res')


    if(nota.value.length == 0){
        alert('[ERROR] Por favor, preencha o campo abaixo.')
    }else{
        nota = Number(nota.value)

        for(nota; nota < 0 || nota > 10;){
            alert('Nota inválida, por favor digite um valor entre 0 e 10.')
            nota = prompt('Digite sua nota:')
        }
        
        if(nota >= 6){
            alert(`Sua nota é: ${nota}\nAprovado \u{2705}!!!`)
            res.innerHTML = (`Sua nota é: ${nota}<br>Aprovado \u{2705}!!!`)
        }else{
            alert(`Sua nota é: ${nota}\nReprovado \u{274C}!!!`);
            res.innerHTML = (`Sua nota é: ${nota}<br>Reprovado \u{274C}!!!`)
        }
    }
    
} 



