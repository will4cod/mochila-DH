let pessoa = {
    nome: 'william',
    idade: 21,
    altura: 1.80
}

// let nome = pessoa.nome

const {nome, altura} = pessoa;
console.log(altura);

let listaCompras = ['pão', 'leite', 'açucar', 'arroz'];

const [ , item2, item3] = listaCompras;

console.log(item2);