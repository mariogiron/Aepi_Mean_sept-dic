var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Estoy en la ruta SHOP');
})

router.get('/house', (req, res) => {
    res.send('Estoy en la ruta SHOP/HOUSE');
})

module.exports = router;