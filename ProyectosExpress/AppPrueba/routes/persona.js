var express = require('express');
var router = express.Router();

let segundoMiddleware = (req, res, next) => {
    console.log('Respondiendo en el segundo Middleware');
    next();
};

router.get('/detalle', (req, res, next) => {
    console.log('Entro en el middleware de /persona/detalle');
    next();
}, segundoMiddleware, (req, res) => {
    res.send('Estoy en PERSONA/DETALLE');
})

router.get('/info', segundoMiddleware, (req, res) => {
    res.send('Estoy en PERSONA/INFO');
})

router.get('/:idPersona', segundoMiddleware, (req, res) => {
    console.log(req.params);
    res.send('Estoy visualizando a la persona con ID: ' + req.params.idPersona);
});

router.get('/perfil/:nombre.:idPersona', (req, res) => {
    res.json(req.params);
})



module.exports = router;