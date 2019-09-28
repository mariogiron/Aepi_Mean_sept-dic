const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('Respuesta a localhost:3000 - GET');
})

app.get('/about', (req, res) => {
    res.end('Respondiendo a la ruta about');
});

app.post('/formulario', (req, res) => {
    res.send('Respuesta petición POST sobre FORMULARIO');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000...');
});