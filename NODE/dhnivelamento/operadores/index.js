// = utilzado para atribuição 
let idade = 35;
console.log(idade);

// operadores aritmeticos 
console.log(10 + 15); // soma ->25
console.log(10 - 15); // subtraçã -> -5
console.log(10 * 15); // multiplicação -> 150
console.log(15/10); // divisão -> 1.5
// 15++ incremento de 1, 15 + 1 = 16
// 15-- decremento de 1, 15 - 1 = 14
console.log(++idade); // ou --15 efetua a ação antes de utilizar a variavel 
console.log(15%2); //modulo , o resta da divisão -> 1


// comparação simples 
console.log(10 == 15); // igualdade -> false
console.log(10 != 15); // desigualdade -> true 

// comparação rigorosa, compara tbm o tipo do dado 
console.log(10 === "10"); //igualdade -> false
console.log(15 !== "15"); //desigualdade -> true  

// comparação
console.log(15 > 15); // maior que  ->  false
console.log(15 >= 15); // maior ou igual que -> true 
console.log(10 < 15); // menor que -> true 
console.log(10 <= 15); // menor ou igual que -> true

// logicos 

// && (and) todos valores tem que avaliar como true para que o resultado seja true
// (10 > 15) && (10!=20) -> false

// || (or) uma avalização seja true para o resultado ser true 
// (10 > 15) || (10 != 20) -> true

// ! (not) nega a condição; se era true, será false, e vice-versa
console.log(!false); //true
console.log(!(20>15)); // false

