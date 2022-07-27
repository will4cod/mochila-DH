// variavel global, criada fora das funções 
let numero = 32;

// modo declarativo

function somar(a,b){
    console.log("Teste variavel global: " + numero);
    console.log("estou somando...");
    return a+b;
}


let resultadoSoma = somar(1,2);
console.log("resultado soma: " + resultadoSoma);


// modo expressão 

const multiplicar = function(a, b){

    // criando variavel local, só pode utilizar dentro dessa function
    let numero1 = 40;
    console.log(numero1);

    console.log("estou multiplicando...");
    return a*b;
}

let resultadoMultiplicar = multiplicar(2,10);
console.log("resultado multiplicação: " + resultadoMultiplicar);


// arrow functions 
const somaarrow = (na,nb) => console.log('resultado: ' + (na + nb));

somaarrow(2,2);