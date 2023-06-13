var button = document.querySelector('#button-inp')
button.addEventListener('click', clique)

function clique(){
    var ht = Number(document.querySelector('#input1').value)
    var htm = Number(document.querySelector('#input2').value)
    var res = document.querySelector('#res')

    var sal = ht * htm
    var inss = (sal / 100) * 10
    var fgts = (sal / 100) * 11

    var ir
    if(sal <= 900){
        ir = `Isento`
    }else if(sal <= 1500){
        ir = (sal / 100) * 5
    }else if(sal <= 2500){
        ir = (sal / 100) * 10
    }else{
        ir = (sal / 100) * 20
    }

    var desc
    if(ir == 'Isento'){
        desc = inss
    }else{
        desc = ir + inss
    }

    var liq = sal - desc

    res.innerHTML = `Salário Bruto: (${ht} * ${htm}): <strong>${sal}</strong><br>`

    if(sal <= 900){
        res.innerHTML += `(-) IR: <strong>${ir}</strong><br>`
    }else if(sal <= 1500){
        res.innerHTML += `(-) IR (5%): <strong>${ir}</strong><br>`
    }else if(sal <= 2500){
        res.innerHTML += `(-) IR (10%): <strong>${ir}</strong><br>`
    }else{
        res.innerHTML += `(-) IR (20%): <strong>${ir}</strong><br>`
    }

    res.innerHTML += `(-) INSS (10%): <strong>${inss}</strong><br>`
    res.innerHTML += `FGTS (11%): <strong>${fgts}</strong><br>`
    res.innerHTML += `Total de descontos: <strong>${desc}</strong><br>`
    res.innerHTML += `Salário Liquido: <strong>${liq}</strong>`
    
   
}