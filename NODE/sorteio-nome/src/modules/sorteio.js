const { query } = require("express");

const usuarios = [
    {
        "nome": "Robson",
        "username": "rbalbina",
        "idade": 15
    },
    {
        "nome": "William",
        "username": "raio",
        "idade": 21
    },
    {
        "nome": "Leandro",
        "username": "lleitep3",
        "idade": 18
    }
]

// Como usar: 
// faça consulta no / passando nome como paramentro 
// exemplo:
// http://localhost:3000/?nome=william

const rota = (app) => {
    app.get('/', (req,res) => {
        console.log(req.query);
        let nome = req.query.nome;
        res.send("ola cheguei, prazer eu sou o " + nome);
    })
}

module.exports = rota;