var button = document.querySelector('#button-inp')
button.addEventListener('click', function clique(){
    let res = document.querySelector('#res')
    let re = document.querySelector('#re')
    let num
    res.innerHTML = 'Ímpares:<br>'
    re.innerHTML = 'Pares:<br>'
    for(num = 1; num <= 50; num++){
        let impa = num % 2
        if(impa != 0){
            res.innerHTML += `${num} `
        }else{
            re.innerHTML += `${num} `
        }
    }
})