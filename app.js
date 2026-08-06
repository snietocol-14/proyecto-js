const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_, res) => {
    res.send("Hola , estamos aprendiendo express con la ficha 3407184");
});

app.listen(port, () => {
    console.log( `Servidor en funcionamiento en el puerto: ${port} `);
}); 

const { datosUsuario, programa } = require('./datos'); 

app.get('/usuario', (req, res) => {
    res.json({ 
        usuario: datosUsuario, 
        programa: programa 
    });
});