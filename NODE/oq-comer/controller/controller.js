// const readline = require('readline');
// const fs = require('fs');
// const readable = fs.createReadStream('./comida.csv');


// let lista = [];

// const rl = readline.createInterface({
//     input: readable
// })

// rl.on('line', (line) => {
//     lista.filter((comidas) => comidas.periodo == "salada")
// })



const csvjson = require('convert-csv-to-json');

let json = csvjson.parseSubArray('\n', ':').getJsonFromCsv("./comida.csv");

for(let i=0; i<json.length;i++){
    // console.log(json[i]);
}
console.log(json);
