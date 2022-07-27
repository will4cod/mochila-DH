const rotasUsuarios = require('./src/modules/sorteio');
const express = require('express');
const app = express();

app.listen(3000, () => console.log("Servidor subiu na porta: http://localhost:3000"));

rotasUsuarios(app);