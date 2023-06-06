function calculo(){
    var materia = document.querySelector('#materia')
    var nota1 = document.querySelector('#nota1')
    var nota2 = document.querySelector('#nota2')
    var res = document.querySelector('#res')

    //variável disciplina e notas
    var disc = materia.value
    var n1 = Number(nota1.value)
    var n2 = Number(nota2.value)
    //variável disciplina e notas

    if(n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10){
        res.innerHTML =`[Error] Digite os valores das notas entre 0 e 10`
    }else{
        var calc = (n1 + n2) / 2
        res.innerHTML = `Sua média em ${disc} é ${calc} `
        if(calc < 6){
            res.innerHTML += `<br><strong>Reprovado</strong>`
        }else{
            res.innerHTML += `<br><strong>Aprovado</strong>`
        }
    }
     
}