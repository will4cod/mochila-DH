for(let volta = 1; volta <=10; volta++){
   console.log("dando a volta " + volta);
}

for(let i = 0; i <=4 ; i++){
    console.log('7 x ' + i + '= ' + i*7);
}

for(let i = 0;i <5; i++){
    console.log('nada');
}

// for/in  percorre cada uma das propriedades de um objeto

var pessoa ={
    nome: 'guilherme',
    idade: 23
}

for( var dados in pessoa){
    console.log(dados, pessoa[dados]);
}

//for/of percorre cada um dos valores de um elemento iterável

var jogos = ['valorant', 'cs', 'cod warzone', 'need for speed']

for (var jogo of jogos){
    console.log(jogo);
}

let frase = "Essa semana vou no colearning";

for(var letras of frase){
    console.log(letras);
}