const calc = require("./calculadora");
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Calc digite dois valores ")

rl.question("Digite n1: ", n1 => {
    rl.question("Digite n2: ", n2 =>{
        console.log("Resultados: ");
        console.log("Soma: " +  calc.soma(n1,n2));
        console.log("Subtração: " + calc.subtracao(n1,n2));
        console.log("Divisão: " + calc.divisao(n1,n2));
        console.log("Multiplicação: " + calc.multiplicacao(n1,n2));
        rl.close();
    })
});

// const { soma } = require("./calculadora");
// console.log(soma(2,5));
