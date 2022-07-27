//string é um array de caracteres 

let nome = 'william';
let sobrenome = 'fernandes';
let nomeTeste = 'lucas almeida';
let desenho = '   futurama    ';
let frase = 'chocolate ao leite é o melhor de todos';
let jogos = 'valorant, cs';
console.log(nome[1]);

// lenght retorna a quantidade total de caracteres na string
console.log(nome.length);
//indexof retorna a primeira posição encontrada na string
console.log(nome.indexOf('m'));
//slice corta a string 
console.log(sobrenome.slice(6));
console.log(nomeTeste.slice(2,5));
//trim remove os espaçõs que estão no inicio e fim da string
console.log(desenho.trim());
//split divide a string em varias strings, utilizando o parametro passado
console.log(frase.split(' '));
//replace substitui uma parte de uma string por outra
console.log(jogos.replace('cs','apex'));

