//string usando aspas duplas
var nome = "william";
var sobrenome = "fernandes";
//strindo usando aspas simples
var profissao = 'Programador1';
//Concatenando strings 
var cracha = nome + " " + sobrenome + " - " + profissao;
// inteiro
var numeroDaSorte = 23;
var idade = 21;
//decimal
var altura = 1.74;
//booleano 
var solteiro = true
//lista ou array
var seriesFavoritas = ["peaky blinders", "rick and morty", "friends"];
//Valores null
var passageirosNoTrem = null;
//Valor not a number ou NaN
var naoNumerico = NaN;
//Valor indefinido 
var espectadores = undefined;
//Definindo o valor da variavel
espectadores = 10;

// objeto literal 
var moto = {
    marca: "honda",
    ano: 2019,
    modelo: "CB500"
}

console.log(moto);

// objeto construtor
function Carro (nomeCarro, anoCarro){
    this.nome = nomeCarro;
    this.ano = anoCarro;
}

let civic = new Carro('civic', 2019);
console.log(civic);
 
let gol = new Carro('Gol', 2017);