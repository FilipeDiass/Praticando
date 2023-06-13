var button = document.querySelector('#button-inp');
button.addEventListener('click', clique);

function clique(){
    var sem = Number(document.querySelector('#input1').value);
    var res = document.querySelector('#res');
  
    switch(sem){
        case 1:
            res.innerHTML = `O valor ${sem} corresponde a Domingo!`;
            break;
        case 2:
            res.innerHTML = `O valor ${sem} corresponde a Segunda-Feira!`;
            break;
        case 3:
            res.innerHTML = `O valor ${sem} corresponde a Terça-Feira!`;
            break;  
        case 4:
            res.innerHTML = `O valor ${sem} corresponde a Quarta-Feira!`;
            break; 
        case 5:
            res.innerHTML = `O valor ${sem} corresponde a Quinta-Feira!`;
            break;
        case 6:
            res.innerHTML = `O valor ${sem} corresponde a Sexta-Feira!`;
            break;
        case 7:
            res.innerHTML = `O valor ${sem} corresponde a Sábado!`;
            break;    
        default:
            res.innerHTML = `[ERROR]<br>O número não pode ser maior que 6 e menor que 1.<br>`
            res.innerHTML += `O número não pode ser decimal(Ex: 2.5).`
    }
}