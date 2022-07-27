const rota = require('./oq-comer')
const express = require('express');
const app = express();

app.listen(3000, () => console.log('subi na porta: http://localhost:3000'));

rota(app);