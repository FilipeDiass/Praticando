var button = document.querySelector('#button-inp')
button.addEventListener('click', clique)

function clique(){
    var turno = String(document.querySelector('#input1').value)
    var res = document.querySelector('#res')
    if(turno == 'M' || turno == 'm' || turno == 'matutino' || turno == 'Matutino'){
        res.innerHTML = `Bom dia!`
    }else if(turno == 'V' || turno == 'v' || turno == 'vespertino' || turno == 'Vespertino'){
        res.innerHTML = `Boa Tarde!`
    }else if(turno == 'N' || turno == 'n' || turno == 'noturno' || turno == 'Noturno'){
        res.innerHTML = `Boa noite!`
    }else{
        res.innerHTML = `[ERROR] As palavras que você digitou estão incorretas.`
    }
}