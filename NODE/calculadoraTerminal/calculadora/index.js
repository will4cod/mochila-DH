function soma(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

function subtracao(n1, n2) {
    return n1 - n2;
}

function divisao(n1, n2) {
    return n1 / n2;
}

function multiplicacao(n1, n2) {
    return n1 * n2;
}


//module.exports = calc;

// primeira forma
// na primeira forma voce adiciona a função como uma propriedade do objeto exports

module.exports.soma = soma
module.exports.subtracao = subtracao

// na segunda forma, voce pode adicionar um objeto completo direto no exports
const calculadora = { soma, subtracao, divisao, multiplicacao }
module.exports = calculadora

