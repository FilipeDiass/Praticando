var res = document.querySelector('#res');

var usu = prompt('Digite seu usuário:');
var sen = prompt('Digite sua senha:');

for(usu; usu == sen;){
    alert('Por-favor, utilizar uma senha diferente do nome do usuário.')
    sen = prompt('Digite sua senha:');
}

res.innerHTML = `Senha registrada com sucesso!!!<br>Usuário: ${usu}<br>Senha: ${sen}`

