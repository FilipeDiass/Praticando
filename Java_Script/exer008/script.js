var button = document.querySelector('#button-inp')
button.addEventListener('click', clique)

function clique(){
    var sal = Number(document.querySelector('#input1').value)
    var rea = 0
    var por = 0
    var res = document.querySelector('#res')

    if(sal <= 280){
        aum = (sal / 100) * 20
        rea = aum + sal 
        por = '20%'
    }else if(sal <= 700){
        aum = (sal / 100) * 15
        rea = aum + sal 
        por = '15%'
    }else if(sal <= 1500){
        aum = (sal / 100) * 10
        rea = aum + sal 
        por = '10%'
    }else{
        aum = (sal / 100) * 5
        rea = aum + sal 
        por = '5%'
    }

    res.innerHTML = `Salário sem reajuste: <strong>R$ ${sal}</strong><br>Percentual do aumento: <strong>${por}</strong><br>Valor do aumento: <strong>R$ ${aum}</strong><br>Salário com reajuste: <strong>R$ ${rea}</strong>`
}