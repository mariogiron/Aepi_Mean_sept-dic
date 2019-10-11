let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('vistaEjemplo', {
        title: 'Título de la página',
        nombre: 'Mario',
        numProductos: 0,
        animales: ['perro', 'gato', 'canario', 'hamster'],
        estudiantes: [
            { nombre: 'Rosa', apellidos: 'García' }
        ]
    });
});

module.exports = router;