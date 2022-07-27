const { json } = require("body-parser");

const comidas = [
    {
        "nome": "pão com ovo",
        "periodo": "cafe"
    },
    {
        "nome": "sucrilhos",
        "periodo": "cafe"
    },
    {
        "nome": "arroz e frango",
        "periodo": "almoco"
    },
    {
        "nome": "macarrao",
        "periodo": "almoco"
    },
    {
        "nome": "hamburguer",
        "periodo": "janta"
    },
    {
        "nome": "pizza",
        "periodo": "janta"
    }
]


const oqComer = (app) => {

    app.get('/', (req,res) =>{

        console.log(req.query);
        const listaComida = comidas.filter((comidas) => comidas.periodo === req.query.periodo.toLocaleLowerCase());
        
        const numeroAleatorio = Math.floor(Math.random() * listaComida.length);
        console.log(numeroAleatorio);
        res.send(listaComida[numeroAleatorio]);
    })
}

module.exports = oqComer;