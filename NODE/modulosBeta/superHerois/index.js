const herois = [
    {
        nome: "batman",
        poder: "inteligencia",
        cumprimentar: function () {
            return "Sou o cavaleiro das trevas";
        },
        turno: function () {
            return "Noite";
        }
    },
    {
        nome: "superman",
        poder: "super força",
        cumprimentar: function () {
            return "Sou o homem de aço";
        },
        turno: function () {
            return "Dia";
        }
    },
    {
        nome: "Homen de ferro",
        poder: "Rico",
        cumprimentar: function () {
            return "Sou o homem de ferro";
        },
        turno: function () {
            return "Dia";
        }
    }
]

module.exports = herois;