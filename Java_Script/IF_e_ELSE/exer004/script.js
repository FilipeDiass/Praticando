var button = document.querySelector('#button-inp')
button.style.display = "none";

var ant = document.querySelector('#button-rese')
ant.addEventListener('click', anterior)

function anterior(){
    var imp1 = document.querySelector('#input1')
    var imp2 = document.querySelector('#input2')

    var res = document.querySelector('#res')

    var antn1 = Number(imp1.value)
    var antn2 = Number(imp2.value)
    
    res.innerHTML = `Clique no botão para poder ver o antes e o depois!`
    button.style.display = "block";
    ant.style.display = "none";

    button.addEventListener('click', posterior)

    function posterior(){
        var imp1 = document.querySelector('#input1')
        var imp2 = document.querySelector('#input2')
    
        var res = document.querySelector('#res')
    
        var postn1 = Number(imp1.value)
        var postn2 = Number(imp2.value)
        
        res.innerHTML = `<p>Os números anteriores são: <strong>${antn1} e ${antn2}</strong></p><p>Os números atuais são: <strong>${postn1} e ${postn2}</strong></p> `
        button.value = `Clique!`
        antn1 = postn1
        antn2 = postn2

    }
}

