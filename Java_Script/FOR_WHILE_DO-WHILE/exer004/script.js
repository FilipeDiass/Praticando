var button = document.querySelector('#button-inp')
button.addEventListener('click', function clique(){

    let inp1 = document.querySelector('#input1')
    let inp2 = document.querySelector('#input2')
    let inp3 = document.querySelector('#input3')
    let inp4 = document.querySelector('#input4')
    let res = document.querySelector('#res')

    if(inp1.value.length == 0 || inp2.value.length == 0 || inp3.value.length == 0 || inp4.value.length == 0){
        alert('[ERROR] Preencha todos os campos para prosseguir.')
    }else{
        let cid1 = Number(inp1.value)
        let por1 = Number(inp2.value)
        let cid2 = Number(inp3.value)
        let por2 = Number(inp4.value)
        let anos = 0
        res.innerHTML = ``

        if(por2 > por1 && cid2 <= cid1){
            for(cid2; cid2 <= cid1; anos++){
                cid1 += (cid1 / 100) * por1
                cid2 += (cid2 / 100) * por2
            }

            cid1 = parseInt(cid1)
            cid2 = parseInt(cid2)
            res.innerHTML += `Anos necessários para a cidade 2: ${anos} anos<br>Número de Habitantes da cidade 1: ${cid1} habitantes<br>Número de Habitantes da cidade 2: ${cid2} habitantes`
        }else if(por1 == por2){
            alert('[ERROR] As porcentagens não podem ser iguais')
        }else if(por2 < por1 && cid2 >= cid1){
            for(cid1; cid1 <= cid2; anos++){
                cid1 += (cid1 / 100) * por1
                cid2 += (cid2 / 100) * por2
            }

            cid1 = parseInt(cid1)
            cid2 = parseInt(cid2)
            res.innerHTML += `Anos necessários para a cidade 1: ${anos} anos<br>Número de Habitantes da cidade 1: ${cid1} habitantes<br>Número de Habitantes da cidade 2: ${cid2} habitantes`
            
        }else if(por1 > por2 && cid2 <= cid1 || por1 < por2 && cid2 >= cid1 || por1 > por2 && cid2 >= cid1){
            alert('[ERROR] A cidade 2 não pode ser maior que a cidade 1 ao mesmo tempo em que a porcentagem da cidade 1 não pode ser maior que a porcentagem da cidade 2(e vice-versa).')
        }
    }
})