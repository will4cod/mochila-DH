// Declarando a lista
let pessoa = ["william", "fernandes", 22, 1.80, ["jogos","dormir"]];
// lenght utilizado para ver o tamanho da lista
console.log(pessoa.length);
// push adiconar elementos ao final do array 
pessoa.push("brasileiro");
// pop elimina o ultimo elemento do array (metodo retorna o elemento eliminado)
var ultimo = pessoa.pop();
// shift elimina o primeiro elemento do array (metodo retorna o elemento eliminado)
var primeiro = pessoa.shift();
// unshift adiciona elementos ao inicio do array 
pessoa.unshift("lucas");
// join junta os elementos de um array usando um separados 
console.log(pessoa.join(' - '));
// indexOf procura no array pelo elemento que recebe como parametro
console.log(pessoa.indexOf('fernandes'));
// lastindexOf procura pelo elemento, porem começa procurando pelo final do array
console.log(pessoa.lastIndexOf(22));
// includes similar ao indexOf porem retorna um booleano 
console.log(pessoa.includes('fernandes'));

let numerosPares = [2,4,6,8,10];

//map retorna um novo array modificado
let numerosParesDobro = numerosPares.map(valor => (valor*2));

console.log(numerosParesDobro);

//filter retorna um novo array contendo os elementos que atenderam a condição
let numerosFiltrados = numerosPares.filter(valor => valor>6);
console.log(numerosFiltrados)

//reduce retorna um unico valor,
let somaPares = numerosPares.reduce(function(acum, valor){
    return acum + valor;
})
console.log(somaPares);

//foreach não retorna nada, passa por cada elemento do array
numerosPares.forEach((valor,indice) => console.log("o indice " + indice + " tem o valor: " + valor))
let numerosPares = [2,4,6,8,10];

//map retorna um novo array modificado
let numerosParesDobro = numerosPares.map(valor => (valor*2));

console.log(numerosParesDobro);

//filter retorna um novo array contendo os elementos que atenderam a condição
let numerosFiltrados = numerosPares.filter(valor => valor>6);
console.log(numerosFiltrados)

//reduce retorna um unico valor,
let somaPares = numerosPares.reduce(function(acum, valor){
    return acum + valor;
})
console.log(somaPares);

//foreach não retorna nada, passa por cada elemento do array
numerosPares.forEach((valor,indice) => console.log("o indice " + indice + " tem o valor: " + valor))


