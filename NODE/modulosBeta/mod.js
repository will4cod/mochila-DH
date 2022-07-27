let ti = "peaky";
let tem = 5;

const series = [
    {titulo: 'mad men', temporadas: 7},
    {titulo: 'breaking bad', temporadas: 5},
    {titulo: 'seinfeld', temporadas: 9},
    {titulo: ti, temporadas: tem}
];


export default function anime(nome, temporada){
    this.nome = nome;
    this.temporada = temporada;
}


//module.exports = anime;
//module.exports = series;

function soma(na,no){

    return na + no + 'funcionou';
}

//exports.soma = soma;
//export anime;
module.exports.anime = 'abc';