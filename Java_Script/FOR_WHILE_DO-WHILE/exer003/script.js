var res = document.querySelector('#res')

var nome = prompt('Digite seu nome:')
for(nome; nome.length <= 3;){
    alert('[ERROR] O nome precisa ter mais que 3 caracteres.');
    nome = prompt('Digite seu nome:')
}
alert('Seu nome foi registrado!');

var idade = prompt('Qual a sua idade?')
for(idade; idade <= 0 || idade > 150;){
    alert('[ERROR] A idade deve ser um número entre 0 e 150.')
    idade = prompt('Qual a sua idade?')
}
alert('Sua idade foi registrada!');

var sal = prompt('Digite o seu salário')
for(sal; sal <= 0;){
    alert('[ERROR} O salário deve ser maior que 0')
    sal = prompt('Digite o seu salário')
}
alert('Seu salário foi registrado!');


var sexo = prompt('Digite o seu sexo (M ou F):')
for(sexo; sexo != 'M' && sexo != 'F';){
    alert('[ERROR] Você digitou as palavras incorretamente.')
    sexo = prompt('Digite o seu sexo (M ou F):')
}
alert('Seu sexo foi registrado!');

var civi = prompt('Digite o seu estado civil:');
for(civi; civi != 's' && civi != 'c' && civi != 'v' && civi != 'd';){
    alert('[ERROR] Você digitou a palavra incorretamente.\nDigite somente as letras s,c,v ou d.')
    civi = prompt('Digite o seu estado civil:')
}
alert('Seu estado civil foi registrado!');

res.innerHTML = `Nome: ${nome}<br>Idade: ${idade}<br>Salário: ${sal}<br>Sexo: ${sexo}<br>Estado Civil: ${civi}`


