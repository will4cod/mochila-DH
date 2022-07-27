// juntando dois arrays 
let frutas = ['maça', 'banana', 'uva', 'ameixa'];
let frutasDois = ['laranja', 'abacate', 'goiaba', 'ameixa'];

let listaCompleta = [...frutas, ...frutasDois];
console.log(listaCompleta);

// juntando objetos
let pessoa = {
    nome: 'william',
    idade: 22
}

let infoPessoal = {
    tel: '44441358',
    rg: 11111222,
    ...pessoa
}

console.log(infoPessoal);

// recebendo diversos parametros na função
function letras(...paramns){
    console.log(paramns);
}

letras('a','b');