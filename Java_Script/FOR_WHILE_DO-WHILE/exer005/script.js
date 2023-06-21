var button = document.querySelector('#button-inp')
button.addEventListener('click', function clique(){
    let num = document.querySelector('#input1').value
    let res = document.querySelector('#res')
    if (!num){ 
        alert('[ERROR] O dado do campo está vazio ou o valor está incorreto.')
    }else{
        let n = Number(num)
        let c = 1
        res.innerHTML = 'Contagem:<br>'
        for(c; c <= 20 ; n++){
            c = c + 1
            res.innerHTML += `${n} `
        }
    }
})
